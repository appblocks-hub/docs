---
title: Sync
sidebar_position: 7
---

Run `bb sync`

Above command will take care of syncing your code with appblocks registry!

So far you have created blocks, started it, played around, connected and pushed to a remote git repository. Now since you made blocks, which can be a reusable asset for you, its better if you have them registered in the Appblocks registry. Thereby you can distribute these blocks privately to different other private projects of yours or you can distribute them to other developers through Appblocks Registry.

Sync command will

- Create orphan branches for unsynced blocks in your codebase.
- Copy and commit the changes done in any already synced block code in the remote main branch to the corresponding orphan branch and then will push to remote.
- Sync the block configurations with appblocks registry, new blocks will be added to registry and stale blocks will be removed
- If you have used bb get command to pull some bock from Appblocks registry, a variant of the same block has to be created in your repository for you to customise. Upon doing sync, this variant creation will also be taken care of
