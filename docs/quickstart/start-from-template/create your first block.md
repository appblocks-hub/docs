---
title: Create your first Block
sidebar_position: 2
---

***Creating a Root Package Block***

A [package block](/docs/core-concepts/type-of-blocks#package-block) context is always required for the generation of any block. Run the command below to generate a package block.
```
    bb init example_todo_package_block
```
This command initializes the creation of a package block and prompts you to select the visibility type, which can be either public or private.

If you intend to distribute this package as an open-source block, choose the "public" visibility option.
In the case of a private project or uncertain visibility requirements, select the "private" option.
Additionally, you will be presented with another prompt asking if you wish to set up a sample project. Choosing "yes" here allows you to start with a pre-built template, specifically a todo app. This option provides a helpful starting point for understanding the coding patterns used in Appblocks. However, if you are already familiar with Appblocks and prefer not to utilize a pre-built template, select "no" at this stage.

Once you have made your selections, the package block is ready for use. You will have a directory for the package block along with block configuration files generated. If you chose to start with a template, then you will have some sub directories, which have the blocks needed for a todo list app.

Navigate to the directory created for the package block and commence coding according to your requirements.


Why we are having a root package block? Root package block is kind of analogous to a project, that encapsulate all the related functionalities together.The directory of the same is the base directory where we generate all other member blocks. A package block is a group of blocks which together can complete a business usecase or a functionality. A package block can contain one or more blocks. Most of the time a reusable asset is going to be a package block rather than an independant block.