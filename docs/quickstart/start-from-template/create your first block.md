---
title: Create your first Block
sidebar_position: 2
---

A package block context is always required for the generation of any block. Run the command below to build a package block.
```
    bb init example_todo_package_block
```
It’ll prompt you to choose your space and your personal / org GitHub account.

By selecting "public" as visibility in this case, the associated repository will become accessible to the public.

Instead of writing from scratch let's choose the todo template already provided by CLI.

![image](https://user-images.githubusercontent.com/33730398/218435286-0edb1521-ed3c-45f2-9422-65b16c76644c.png)

This will create a directory structure like below.

![image](https://user-images.githubusercontent.com/33730398/218435439-7c702ccf-2035-4f91-bc1b-3b1f694d4cdd.png)

At this point, there will be a repository created for the package block with its blocks.config.json file. “blocks.config.json” contains the metadata of the package block with all its associated member blocks metadata.

![image](https://user-images.githubusercontent.com/33730398/218435544-c1801c32-7e15-4741-b007-9359402cae5a.png)
