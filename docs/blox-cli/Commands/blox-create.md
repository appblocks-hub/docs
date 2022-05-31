---
sidebar_position: 8
---

# blox create

Blox create can be used to create all kinds of bloxes!

### Synopsis

    blox create [options]

### Description

The create command can be used to create all types of bloxes (i.e container, element and function bloxes).
The command accepts one option  
`-t,--type` with value from ["ui-container","ui-elements","function",shared-fn","data"]

### Details

`blox create blox1 --type ui-container` will create a container blox, with a basic template code in the local directory and register the blox.

If `--type` is not passed, user will be prompted to enter the type before the operation.

<!-- ### Configuration -->
