---
title: Connect to Github
sidebar_position: 2
---

**Connect Github**

```
  bb connect github
```

This command will open up the browser and prompt you to authorize your CLI with your GitHub account. It is important to ensure that you provide access to the required organizations during the authorization process.

Now, you might be wondering why it is necessary to connect your app with GitHub. The reason is that with appblocks, when you create a package block and include multiple blocks within it, you treat the entire source code as a single repository with numerous files. However, the same source code contains files belonging to different blocks. It would be beneficial to separate each block independently and reuse them in different projects. Ideally, each block should be built with reusability in mind. These reusable source code assets are called blocks.

By using the BB CLI, you can create orphan branches in GitHub for each block automatically. You can also create different versions for each block and, if desired, publish them to the store for other developers to utilize. The BB CLI provides utilities to facilitate these operations.

However, for the BB CLI to effectively handle the Git operations for each block, it requires authorization from the GitHub app of appblocks. This authorization allows the CLI to connect with GitHub APIs.

Additionally you will be prompted to drop a PAT or enable ssh connection with github, so that cli can take care of repository operations like creating new orphan branch, commiting and pushing to orphan branches etc... on behalf of you.
