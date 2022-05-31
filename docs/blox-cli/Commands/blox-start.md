---
sidebar_position: 5
---

# blox start

1. [Start all bloxes](#start-all-bloxes)
2. [Start a blox](#start-one-ui-blox)

## Start all bloxes

### Synopsis

    blox start

### Description

The `blox start` command will start the emulator and also all the available ui bloxes, installing all its pacakge dependencies first.

### Details

All bloxes will be updated and started. Function bloxes will be started in an emulator (a single process) and all ui bloxes will be seperate processes.  
There will be seperate logs for all ui bloxes and a single log for the emulator.  
Command is smart enough to know if the bloxes are already live and won't start them again.  
For ui bloxes, the port given in its webpack config is given priority, if it is not available another port is assigned.

<!-- ### Configuration -->

## Start one ui blox

### Synopsis

    blox start blox1

### Description

### Details

Will run `webpack-dev-server` inside the blox directory.  
Blox is marked as live. And logs will be written to 'logs/blox1.log'

<!-- ### Configuration -->
