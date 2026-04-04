## Open projects and areas

~~~markdown
```dataview
LIST FROM "1 - Projects" OR "2 - Areas"
WHERE status = "in progress"
```
~~~

```dataview
LIST FROM "1 - Projects" OR "2 - Areas"
WHERE status = "in progress"
```

## Next tasks

~~~markdown
```dataviewjs
await dv.view("dataview-next", {
	query: '"1 - Projects" OR "2 - Areas"',
	filter: p => p.status == "in progress"
})
```
~~~

```dataviewjs
await dv.view("dataview-next", {
	query: '"1 - Projects" OR "2 - Areas"',
	filter: p => p.status == "in progress"
})
```
