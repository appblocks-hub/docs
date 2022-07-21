---
sidebar_position: 13
---

# yah exec

yah exec lets you run system commands inside all blocks' directories in one go.

Deploying a **block** includes the following steps:

1. [Executing command in one block](#executing-a-command-in-one-block)
2. [Executing command in a list of blocks](#executing-a-command-in-a-List-of-blocks)
3. [Executing command in all blocks](#executing-a-command-in-all-blocks)

## Executing a command in one block

### Synopsis

    yah exec "ls -a" block1

### Description

yah exec lets you run a command in a single block's directory, a list of blocks' directories or all present blocks at once.

### Details

To install packages in a block,
`yah exec "npm i" -in block1`

<!-- ### Configuration -->

## Executing a command in a List of blocks

### Synopsis

    yah exec "ls -a" -in block1 block2

### Description

To run a command inside a list of selected **blocks**, space-separated block names can be passed with -in or --inside options.

### Details

To install packages in multiple **blocks** at once,
`yah exec "npm i" --inside block1 block2 block3`

<!-- ### Configuration -->

## Executing a command in all the blocks

### Synopsis

    yah exec "npm i"

### Description

If no options is provided, the given command is executed inside all the blocks by default.

### Details

`yah exec "npm i"`

<!-- ### Configuration -->
