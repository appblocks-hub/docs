---
sidebar_position: 13
---

# blox exec

Blox exec lets you run system commands inside all Blox directories in one go.

Deploying a Blox includes the following steps:

1. [Executing command in one blox](#executing-a-command-in-one-blox)
2. [Executing command in a list of bloxes](#executing-a-command-in-a-List-of-bloxes)
3. [Executing command in all bloxes](#executing-a-command-in-all-bloxes)

## Executing a command in one blox

### Synopsis

    blox exec "ls -a" blox1

### Description

Blox exec lets you run a command in a single blox directory, a list of blox directories or all present bloxes at once

### Details

To install packages in a blox,
`blox exec "npm i" -in blox1`

<!-- ### Configuration -->

## Executing a command in a List of bloxes

### Synopsis

    blox exec "ls -a" -in blox1 blox2

### Description

To run a command inside a list of selected Blox, space-separated Blox names can be passed with -in or --inside options.

### Details

To install packages in multiple Blox at once,
`blox exec "npm i" --inside blox1 blox2 blox3`

<!-- ### Configuration -->

## Executing a command in all bloxes

### Synopsis

    blox exec "npm i"

### Description

If no options is provided, the given command is executed inside all Blox by default.

### Details

`blox exec "npm i"`

<!-- ### Configuration -->
