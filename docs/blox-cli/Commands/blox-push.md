---
sidebar_position: 11
---

# blox push

To push Blox code to source control.

### Synopsis

    blox push [blox-name] [options]

### Description

Blox push command can be used to make commits and to push Blox code to connected source control.
The operation can be performed on a single Blox or all the Blox at once.

### Details

The command requires two options to be passed, `-f` or `--force` if no Blox name is provided. Also, the commit message passed with `-m` or `--message` flag.

To push a single Blox by the name blox1 with the commit message "initial commit", the command looks like so:
`blox push blox1 -m "initial commit"`

`blox push -f -m "initial commit"` will commit and push all the Blox with the commit message "initial commit".

In case a message was not passed initially, a prompt will ask for a message before committing.

If the operation fails, the reason will be listed in a report shown at the end of the operation.
(Eg. If there are no files to stage, the push operation fails)

<!-- ### Configuration -->
