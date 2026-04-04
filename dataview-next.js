input = input || {};
const taskLimit = input.taskLimit || 3;
const headerPattern = /^#{1,6}\sNext\s*$/;

let pages = dv
  .pages(input.query)
  .sort((p) => p.file.mtime, "desc");
if (input.filter) {
  // optional filter on page attributes
  // e.g. p => status == "in progress"
  pages = pages.where(input.filter);
}

for (let page of pages) {
  let text = await dv.io.load(page.file.path);
  let lines = text.split("\n");
  // find the "Next" header
  let nextLine = lines.findIndex((line) => line.match(headerPattern));
  if (nextLine < 0) {
    nextLine = lines.length; // not found, skip to end
  }
  // find and sort the tasks by subheader,
  // putting the bare "Next" tasks first.
  let next = page.file.tasks
    .where((t) => !t.completed && t.line > nextLine)
    .groupBy((t) => dv.sectionLink(page.file.path, t.header.subpath))
    .map((group) => {
      return { key: group.key, rows: group.rows.limit(taskLimit) };
    }).sort((g) => g.key.subpath == "Next" ? "AAAAAA" : g.key.subpath);
  if (next.length > 0) {
    dv.taskList(next, false);
  } else {
    dv.header(4, dv.fileLink(page.file.path));
    dv.el("p", "_No next tasks_");
  }
}

if (pages.length == 0) {
  dv.el("p", "_No next tasks_");
}
