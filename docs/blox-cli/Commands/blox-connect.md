---
sidebar_position: 5
---

# blox connect

To connect to Github.

### Synopsis

    blox connect <service>

### Description

Connect command can be used to authorize CLI to use source controls (only Git is supported), enabling the user to easily do Git operations through CLI and across multiple Blox at once.

### Details

The command will connect to GitHub via Github's device flow.
Command has an option `--force` which can be used to restart GitHub auth flow (i.e., sign into a different git account).

<!-- ### Configuration -->
