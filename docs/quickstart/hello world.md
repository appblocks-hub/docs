---
title: Hello World
sidebar_position: 2
---

Appblock refers to a component or module of code that can be independently developed and seamlessly integrated into larger applications, promoting collaboration and reusability through standardized data models and a Micro Architecture approach where backend API endpoints are implemented as functions. 

**Installation**

```
    npm i @appblocks/bb-cli -g
```
The BB CLI streamlines block creation, collaboration, management, and deployment by connecting to the Appblocks Registry. [Know More](/docs/quickstart/start-from-template/setup)


**Creating A Package**

```
    bb init <package_name>
```
This will create a package from scratch 

You can select whether your package is public/private and also you can select default project or predefined Todo Package App. [See more](/docs/quickstart/start-from-template/create%20your%20first%20block)

**Creating A Block**
```
  bb create <block_name>
```
Used to create a block; UI, Function, or Shared Block. This command will prompt you to choose the type of block. It will also create a sample template.

**Examples**

You Can Find [Examples](https://github.com/appblocks-hub/node-sdk/tree/main/examples) of different types of block and change the index file with examples. 


**Starting A Block**
```
  bb start
```
Executing the above command will build and serve the blocks on available free ports. By default, the functions will use port 5000.[See More](/docs/quickstart/start-from-template/start%20your%20blocks)

