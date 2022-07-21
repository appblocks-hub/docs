---
sidebar_position: 9
---

# yah log

yah log command reads and displays logs related to live blocks.

### Synopsis

    yah log <block-name>

### Description

`yah log block1` will start showing the webpack compilation logs if the given block is a ui block.  
For function blocks, a log of the emulator is shown, i.e logs of all running funtion blocks should be expected.

### Details

Logs generated after the command start is shown as it is written. Logs already present will not be displayed.  
Command will not work if block is not live.

<!-- ### Configuration -->
