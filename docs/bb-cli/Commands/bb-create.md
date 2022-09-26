---
sidebar_position: 8
---

# bb create

bb create can be used to create all kinds of blocks!

### Synopsis

    bb create [options]

### Description

The create command can be used to create all types of blocks (i.e container, element and function blocks).
The command accepts one option  
`-t,--type` with value from ["ui-container","ui-elements","function",shared-fn","data"]

### Details

`bb create block1 --type ui-container` will create a container block, with a basic template code in the local directory and register the block.

If `--type` is not passed, user will be prompted to enter the type before the operation.

<!-- ### Configuration -->
