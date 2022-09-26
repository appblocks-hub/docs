---
sidebar_position: 17
---

# bb pull

Pull command is used pull new blocks into an app.

1. [Pull a block](#pull-a-block)
2. [Create custom version of a block](#create-custom-version-of-a-block)

## Pull a block

### Synopsis

    bb pull block1

### Description

The command will pull the latest code of _block1_ to the local directory.

### Details

Non-appblock type blocks can only be pulled with `bb pull`.  
For appblock type blocks, use _pull-appblock_ command

<!-- ### Configuration -->

## Create custom version of a block

### Synopsis

    bb pull block1

### Details

If the user wants to customise a block by cloning the block code to own repo, the pull command prompts with a question at the start.

    Do you wish to create a new block from block1

The flow is similar to `bb create` except in place of a sample template, source code of _block1_ will be present.

<!-- ### Configuration -->
