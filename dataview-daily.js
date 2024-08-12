// find headers that link to this daily note
const headerPattern =
  new RegExp("^(#{1,6})\\s(.*" + dv.current().file.name + ".*)");
// find any header
const genericHeader = new RegExp("^(#{1,6})\\s.*");
// the YYYY-MM-DD portion of this daily note's filename
const date = dv.current().file.name.split(" ")[0];

// reindent subheaders to the next level down from the given header depth:
function reindent(lines, depth) {
  return lines.map((line) => {
    let match = line.match(genericHeader);
    if (match) {
      headerDepth = match[1].length;
      return "#".repeat(depth - headerDepth + 1)+line;
    } else {
      return line;
    }
  });
}

// get all the unique pages that link to this daily note
// or start with today's date
// and sort by last modified time
let today = dv.pages()
  .where((p) => p.file.name.startsWith(date))
  .filter((p) => p.file.path != dv.current().file.path);
let pages = dv.current()
  .file.inlinks 
  .map(i => dv.page(i.path))
  .concat(today)
  .distinct((p) => p.file.path)
  .sort((p) => p.file.mtime, "asc");

dv.el("h2", "Related");

let rendered = false;

// for each page:
for (let page of pages) {
  // load the text
  let text = await dv.io.load(page.file.path);
  // mentions are inline links, "- [[date]] some note"
  let mentions = [];
  // headers are "### [[date]]" log headers
  let headers = [];
  let lines = dv.array(text.split("\n"));

  // first, if this page is a note that was created on this day
  // e.g. a meeting note titled "<date> Meeting - about things"
  // include the entire contents inline
  if (page.file.name.startsWith(date)) {
    // add a header with the page title and link
    dv.header(3, dv.fileLink(page.file.path));
    // include all the contents, but reindent headers
    // to match the outer indentation
    dv.el("div", reindent(lines, 3).join("\n"));
    continue;
  }

  // otherwise, look for mentions and headers
  lines.where(l => l.includes(dv.current().file.name))
    .forEach((line) => {
      if (line.match(headerPattern)) {
        headers.push(line);
      } else {
        mentions.push(line);
      }
    });

  if (mentions.length > 0 || headers.length > 1) {
    if (mentions.length > 0) {
      // link to the page but not a section in it
      // (there is no subhead to link to)
      dv.header(3, dv.fileLink(page.file.path));
      // and render the mentioned lines directly
      dv.el("div", mentions.join("\n"));
    }
    // error case, I must have done something weird in my note:
    if (headers.length > 1) {
      dv.header(3, dv.fileLink(page.file.path));
      dv.el("p", headers.length + " headers matched!");
    } 
  }
  if (headers.length > 0) {
    // only processing the first one that matches
    header = headers[0];
    let currentHeader = lines.findIndex((line) => line.match(headerPattern));
    // figure out what header level we're at (h2, h3, etc)
    const depth = header.match(headerPattern)[1].length;
    const text = header.match(headerPattern)[2];

    // link to the current header section
    dv.header(3, dv.sectionLink(page.file.path, text));
    if (currentHeader < 0) {
      dv.el("p", "_couldn't find matching header, something went wrong_");
      console.log("couldn't find matching header linking to",
        dv.current().file.name, "in", page.file.path);
      continue;
    }
    // figure out when the next sibling header begins
    let nextHeader = lines.findIndex((line) => {
      const match = line.match(genericHeader);
      return match && match[1].length <= depth;
    }, currentHeader + 1);
    if (nextHeader < 0) {
      nextHeader = lines.length;
    }
    // include every line between the current and next header
    dv.el("div",
      reindent(lines.slice(currentHeader + 1, nextHeader), 3).join("\n"));
  }

  if (mentions.length > 0 || headers.length > 0) {
    rendered = true;
  }
}

if (!rendered) {
  dv.el("p", "_no related notes_");
}
