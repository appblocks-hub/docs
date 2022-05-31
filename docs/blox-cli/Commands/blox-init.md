---
sidebar_position: 7
---

# Blox Init

Blox init command can be employed to create and register an appblox.

### Synopsis

    blox init <appblox-name>

### Description

The init command when passed with a required argument _appblox-name_, will create a basic appblox config in local and register the same in appblox in the registry.  
The config can later be pushed using `push-config` command
so peers can use the same and build on it.

### Details

`blox init blox1`  
The command will fail if run inside a git repository. A clean directory is expected.  
If name already exists, a prompt to enter new name is shown.

<!-- ### Configuration -->
