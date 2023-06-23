---
title: Versions and Release
sidebar_position: 8
---

Run

```
bb create-version <block name>
```

Now that we have synced the blocks, did the block development and we have a release ready version of code in the repository, lets go ahead and create a version.

- While creating a version, bb cli will create a version branch in the corresponding block orphan branch and will push it to remote.
- This created version only has existence in github and your local git right now.
- Now lets say you want this version to be released to the public, then you might want make this version release ready
- for that run

```
bb publish <block name>
```

- this command will push the version to be released to space, a zip of the source code will be uploaded to appblocks storage.
- Now if you visit https://spaces.appblocks.com and login, in `Manage blocks > Own blocks` section you can see the block you just published along with publish button.
- Clicking on that publish button you will be redirected to a form UI where you can enter some details about the development effort of the block
- Next you will be asked to choose whether the block to be published as free or paid. As of now, only free version of block can only be published to store
- Next you will be asked to choose from a list of all the release ready versions you have published from cli, the version of block you want to publish. Choose the one that is right for you. You should be able to see details about that version and its child blocks (if its a package block.)
- Finally a request for the publish will be submitted.You can see the submission listing and its status. Appblocks team will review this request and will approve/reject. And once its approved, your block will be listed in the appblocks store, https://store.appblocks.com.
