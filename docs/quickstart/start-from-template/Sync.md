---
title: Sync
sidebar_position: 4
---

Run ```bb sync```

![image](https://user-images.githubusercontent.com/33730398/218434651-c4f6bcc8-58d7-4856-a91e-08aaf67c116b.png)

Hit yes. CLI found 6 folders with ```block.config.json``` and is asking you to sync that with the registry. Once the process is completed it will push the code to the individual repository as well.

You can start syncing all 6 blocks like below as we did.

![image](https://user-images.githubusercontent.com/33730398/218434768-327c98be-15d6-4a65-aed2-b1d878deeaba.png)

Once the process is finished your folder structure will look like this.

![image](https://user-images.githubusercontent.com/33730398/218434871-9e2604ca-c5c3-442b-b752-bef8b81738b6.png)

And in block.config.json the new blocks have been added as dependencies with its GitHub URL. The same will be reflected in individual block config files.

![image](https://user-images.githubusercontent.com/33730398/218435000-701e3421-72ce-43ee-98f4-a497e5371627.png)

Let's try to start this package block and see if this works. (Don’t worry, we’ll explain the code later)
