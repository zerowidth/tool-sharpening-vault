
Dataview: query language operating against your vault.

~~~markdown
```dataview
TABLE WITHOUT ID
  file.link AS "project",
  status,
  length(map(file.tasks, (x) => !x.completed)) AS "tasks remaining"
FROM "1 - Projects" OR "2 - Areas"
SORT file.mtime
```
~~~

```dataview
TABLE WITHOUT ID
  file.link AS "project",
  status,
  length(map(file.tasks, (x) => !x.completed)) AS "tasks remaining"
FROM "1 - Projects" OR "2 - Areas"
SORT file.mtime
```

## Javascript

Dataview has a javascript API:

~~~markdown
```dataviewjs
let pages = dv
  .pages('"1 - Projects" OR "2 - Areas"')
  .where(p => p.status == "in progress")
  .sort(p => p.file.mtime, "desc");
dv.list(pages.map(p => dv.fileLink(p.file.path)));
```
~~~

```dataviewjs
let pages = dv
  .pages('"1 - Projects" OR "2 - Areas"')
  .where(p => p.status == "in progress")
  .sort(p => p.file.mtime, "desc");
dv.list(pages.map(p => dv.fileLink(p.file.path)));
```
## Complex dataviewjs

[[Next Tasks]]

Add this snippet to daily note:

~~~markdown
```dataviewjs
await dv.view("dataview-daily")
```
~~~

Prev: [[2 - Project notes]] Next: [[4 - More magic]]
