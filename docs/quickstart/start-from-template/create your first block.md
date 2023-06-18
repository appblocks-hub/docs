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

Once you have made your selections, the package block is ready for use. Navigate to the directory created for the package block and commence coding according to your requirements.


