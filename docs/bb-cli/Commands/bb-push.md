---
sidebar_position: 11
---

# bb push

To push block code to source control.

### Synopsis

    bb push [block-name] [options]

### Description

bb push command can be used to make commits and to push block code to connected source control.
The operation can be performed on a single block or all the blocks at once.

### Details

The command requires two options to be passed, `-f` or `--force` if no block name is provided. Also, the commit message passed with `-m` or `--message` flag.

To push a single block by the name block1 with the commit message "initial commit", the command looks like so:
`bb push block1 -m "initial commit"`

`bb push -f -m "initial commit"` will commit and push all the blocks with the commit message "initial commit".

In case a message was not passed initially, a prompt will ask for a message before committing.

If the operation fails, the reason will be listed in a report shown at the end of the operation.
(Eg. If there are no files to stage, the push operation fails)

<!-- ### Configuration -->
