---
sidebar_position: 7
---

# yah init

The 'yah init' command can be employed to create and register an appblock.

### Synopsis

    yah init <appblock-name>

### Description

The init command when passed with a required argument _appblock-name_, will create a basic appblock config in local and register the same in appblock in the registry.  
The config can later be pushed using `push-config` command
so peers can use the same and build on it.

### Details

`yah init block1`  
The command will fail if run inside a git repository. A clean directory is expected.  
If name already exists, a prompt to enter new name is shown.

<!-- ### Configuration -->
