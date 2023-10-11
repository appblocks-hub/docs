---
title: Sync
sidebar_position: 7
---

Run `bb sync`

Above command will take care of syncing your code with the Appblocks Registry!

So far you have created blocks, started it, played around, connected and pushed to a remote git repository. Now since you made blocks, which can be a reusable asset for you, it's better if you have them registered in the Appblocks Registry. Thereby, you can distribute these blocks privately to different, other private projects of yours or you can distribute them to other developers through the Appblocks Store.

Sync command will

- Create orphan branches for the unsynced blocks in your codebase.
- Copy and commit the changes done in any already synced block code in the remote main branch to the corresponding orphan branch and then will push to remote.
- Sync the block configurations with the Appblocks Registry, new blocks will be added to the registry and stale blocks will be removed
- If you have used "bb get" command to pull some bock from the Appblocks Store, a variant of the same block has to be created in your repository for you to customise. Upon doing sync, this variant creation will also be taken care of.
