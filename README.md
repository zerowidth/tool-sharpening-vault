This repository is an [Obsidian](http://obsidian.md) vault built to document and demonstrate a variety of plugins, patterns, and tips for working effectively with Obsidian and other MacOS utilities.

## Tour (for presentations)

[[0 - Intro]]

## Getting started

These are a selection of the plugins and settings I use.

### Structure

- [x] PARA folders
	- [x] People
	- [x] Meeting notes
- [x] Templates folder
- [x] Attachments folder
	- [x] Configure this as the location for attachments

### Appearance

- [x] Install the [minimal theme]([https://minimal.guide](https://minimal.guide/home#Get+started))
- [x] Install the [minimal theme settings](obsidian://show-plugin?id=obsidian-minimal-settings) plugin
	- [x] Enable "colorful headings"
- optionally install [style settings](obsidian://show-plugin?id=obsidian-style-settings) and [hider](obsidian://show-plugin?id=obsidian-hider)
- [x] [shiki highlighter](obsidian://show-plugin?id=shiki-highlighter) for syntax highlighting
- [x] [iconize](obsidian://show-plugin?id=obsidian-icon-folder) 
	- [x] set default icons for folders and files
	- [x] set icons for issues, projects, people, meeting notes

### Plugins

- [x] Configure default plugins
	- [x] Daily notes
	- [x] Vim mode
- [x] [settings search](obsidian://show-plugin?id=settings-search) to search through settings faster
- [x] [calendar](obsidian://show-plugin?id=calendar): integrates nicely with daily notes
	- [periodic notes](obsidian://show-plugin?id=periodic-notes): optional, but gets you weekly/monthly/quarterly notes
- [x] [paste url into selection](obsidian://show-plugin?id=url-into-selection)
- [x] [templater](obsidian://show-plugin?id=templater-obsidian)
- [x] [quickadd](obsidian://show-plugin?id=quickadd)
- [x] [dataview](obsidian://show-plugin?id=dataview)
- [x] [auto link title](obsidian://show-plugin?id=obsidian-auto-link-title)
	- [x] disable "link enhancement" since it won't work on things like private repos. Use the `cmd+shift+e` hotkey to do it intentionally instead.
- [x] [omnisearch](obsidian://show-plugin?id=omnisearch)
	- [x] replace the `cmd+shift+f` search binding
- [x] [quick switcher++](obsidian://show-plugin?id=darlal-switcher-plus)o
	- [x] `cmd+shift+o` for symbol navigation
- [x] [iconize](obsidian://show-plugin?id=obsidian-icon-folder)
	- [x] configure folder and file rules
- [x] [metadata menu](obsidian://show-plugin?id=metadata-menu) for managing file properties like project status
	- [x] scope to frontmatter only
- [x] [natural language dates](obsidian://show-plugin?id=nldates-obsidian)
	- [x] configure prefix as `^` so it doesn't conflict with below
	- [x] configure date format to match daily notes
- [x] [@ symbol linking](obsidian://show-plugin?id=at-symbol-linking) for quick-adding/referencing people

#### Dataview

- [x] enable javascript queries
- [x] enable inline javascript queries
- [x] add scripts, ref [zerowidth positive lookahead | Managing projects in Obsidian](https://zerowidth.com/2022/managing-projects-in-obsidian/)

#### Templater

- [x] template folder location
- [x] configure user commands

#### Quickadd

- [x] configure templates and captures

### Workflow configuration

- [x] configure daily note path and date format. I'm using `YYYY/YYYY-MM-DD ddd` in `0 - Daily`
- [x] configure daily note template
- [x] configure metadata menu `status` propery as a choice with `in progress`, `complete`, `on hold` , `canceled`
- [x] create project template
- [x] create "new project" quickadd in `1 - Projects`
- [x] create [[Next Tasks]] document with dataview queries
- [x] create issue project template with `gh-md` wiring
- [x] create "daily log entry" templater hotkey `cmd+shift+L`
- [x] create "markdown link" quickadd with `cmd+shift+M` with `gh-md` wiring

### Hotkeys

- `cmd+\` for left sidebar
- `cmd+shift+\` for right sidebar
- `cmd+shift+E` for "enhance existing url with link and title" (defined by plugin)
- `cmd+shift+D` for today's daily note
- `cmd+shift+F` for omnisearch (replaces the default)
- `cmd+shift+O` for symbol search in current document (headings), just like vscode
