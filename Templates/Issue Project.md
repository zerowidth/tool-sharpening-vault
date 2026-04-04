---
status: in progress
---
<%- await tp.file.rename("Issue - " + tp.date.now("YYYY-MM") + " - " + (await tp.user.markdownTitle({input: (await tp.system.clipboard())}))) -%>

## References

- <% tp.user.markdownLink({input: (await tp.system.clipboard())}) %>

## Log

### [[<% tp.date.now("YYYY-MM-DD ddd") %>]]

<% tp.file.cursor() %>

## Next

