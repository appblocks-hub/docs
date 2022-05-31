---
sidebar_position: 17
---

# blox pull

Pull command is used pull new bloxes into an app.

1. [Pull a blox](#pull-a-blox)
2. [Create custom version of a blox](#create-custom-version-of-a-blox)

## Pull a blox

### Synopsis

    blox pull blox1

### Description

The command will pull the latest code of _blox1_ to the local directory.

### Details

Non-appblox type bloxes can only be pulled with `blox pull`.  
For appblox type bloxes, use _pull-appblox_ command

<!-- ### Configuration -->

## Create custom version of a blox

### Synopsis

    blox pull blox1

### Details

If the user wants to customise a blox by cloning the blox code to own repo, the pull command prompts with a question at the start.

    Do you wish to create a new blox from blox1

The flow is similar to `blox create` except in place of a sample template, source code of _blox1_ will be present.

<!-- ### Configuration -->
