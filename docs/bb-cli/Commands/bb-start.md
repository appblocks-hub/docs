---
sidebar_position: 5
---

# bb start

1. [Start all blocks](#start-all-blocks)
2. [Start a block](#start-one-ui-block)

## Start all blocks

### Synopsis

    bb start

### Description

The `bb start` command will start the emulator and also all the available ui blocks, installing all its pacakge dependencies first.

### Details

All blocks will be updated and started. Function blocks will be started in an emulator (a single process) and all ui blocks will be seperate processes.  
There will be seperate logs for all ui blocks and a single log for the emulator.  
Command is smart enough to know if the blocks are already live and won't start them again.  
For ui blocks, the port given in its webpack config is given priority, if it is not available another port is assigned.

<!-- ### Configuration -->

## Start one ui block

### Synopsis

    bb start block1

### Description

### Details

Will run `webpack-dev-server` inside the block's directory.  
Block is marked as live. And logs will be written to 'logs/block1.log'

<!-- ### Configuration -->
