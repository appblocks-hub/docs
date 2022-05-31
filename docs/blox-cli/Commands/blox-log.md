---
sidebar_position: 9
---

# blox log

Blox log command reads and displays logs related to live bloxes.

### Synopsis

    blox log <blox-name>

### Description

`blox log blox1` will start showing the webpack compilation logs if given blox is a ui blox.  
For function bloxes, a log of the emulator is shown, i.e logs of all running funtion bloxes should be expected.

### Details

Logs generated after the command start is shown as it is written. Logs already present will not be displayed.  
Command will not work if blox is not live.

<!-- ### Configuration -->
