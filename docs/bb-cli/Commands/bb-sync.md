---
sidebar_position: 16
---

# bb sync

The 'bb sync' command can be used to convert existing projects that were not built as blocks, to appblock projects.
It could also be called when there is a need to rebuild corrupt or missing Appblock config file.

1. [Rebuild config json](#rebuild-config-json)
2. [Recreate missing config json](#recreate-missing-config-json)

## Rebuild config json

### Synopsis

    bb sync

### Description

If a directory for a block is present and is valid, but the cli cannot identify it because it is not present in appblock config, running _bb sync_ will add it to the config.

### Details

The `bb sync` command will scan through the entire appblock directory, looking for valid _block.config.json_ files. It'll also check for the location of blocks in directory tree based on type. If there are misplaced blocks, command will ask user to move folders to expected paths. Command will also check with the registry for the existence of found blocks, and prompt user to register all the non-registered blocks.  
At last a new config json is displayed where user can accept or reject the new config.

If blocks are rearranged within directories, bb sync can be used for rebuilding config.json locally.

<!-- ### Configuration -->

## Recreate missing config json

### Synopsis

    bb sync

### Description

If the _appblock.config.json_ is gone missing, `bb sync` can also rebuild it from scratch.

### Details

If config file is missing, user can enter the already registered app's name in sync and it can pull the already present config file for the app from registry.  
Command will always scan through directories and build a temporary config, which it used to compare with the config from registry, and displays the differences to the user. The user can decide to keep or discard the changes.

<!-- ### Configuration -->
