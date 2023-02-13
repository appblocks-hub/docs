---
title: Configurations
sidebar_position: 3
---

Each folder might have a block config of its own as follow,

[https://lh4.googleusercontent.com/EL0qe8owU6GQxIii1jGNSzBtrR3lm-hJgwhcugF-zRodAsqq_gLqhYlppDaYJpSK0tF0I-pjHHARYOBlxTp9bNvlNwrM-JReO5oN0AqvIwoVinN_pTHhBQ_gaRKd64aJMOyx53xkc4-S9-kOlc0sktg](https://lh4.googleusercontent.com/EL0qe8owU6GQxIii1jGNSzBtrR3lm-hJgwhcugF-zRodAsqq_gLqhYlppDaYJpSK0tF0I-pjHHARYOBlxTp9bNvlNwrM-JReO5oN0AqvIwoVinN_pTHhBQ_gaRKd64aJMOyx53xkc4-S9-kOlc0sktg)

Here the type field represents the Block Type.

Source represents the corresponding source repository URL of the block (currently it's empty because it isn't synced to repo/registry yet)

Lang represents Language/ Runtime

And as the commands say start and build are for the commands to run the block and do the build.

Currently, there are no dependencies attached in the root block.config.json since we haven’t synced todo code with appblocks registry yet (it's just a code template now, but let's make it a block). To do that we need to use ```bb sync``` command as CLI prompted while we created the package block.