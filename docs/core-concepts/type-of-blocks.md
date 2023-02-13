---
title: Type of Blocks
sidebar_position: 2
---
### **UI Block**

As the name suggests, UI Block is a frontend Block and is developed for browser runtimes.

A UI block can be a UI component/UI container that solves a business use case.

Currently, we only support React-based UI Blocks following Webpack Module Ferederation.

UI Blocks are of two types:

### **UI Elements**

Reusable UI components that can be split into different blocks of code called UI Elements.

### **Container Block**

These are the Frontend orchestrators that stitch the elements to the app.

Container Blocks will have the main routing files and placeholders for remote modules. It will decide when to pull and how to render a remote element Block.

Container Blocks also decide the layout of the entire app and it renders when you visit the app URL.

It will pull the required bundles from the remote servers, stitch them together at runtime and render the app.

### Fn Block

Fn Blocks are the backend API Blocks.

We have designed Fn Blocks in a FaaS Architecture.

Each of these blocks is supposed to be mutually exclusive.

Every Fn Block will have a specific URL to invoke it and in practical scenarios, all the Fn Blocks in an app will be stitched together and run in a single instance on the server.

In case a particular Fn is having more traffic, ie, if it needs to be scaled, that specific Fn Block will be isolated and run in a separate instance.

Fn Blocks are language agnostic by design. Despite that, it is always better for developers to stick with the same language in app development for maintainability.

All functions which have a database call should adhere to SDM.

Currently, we only support Nodejs.

### **Shared Block**

In both frontend and backend, there can be some pieces of code that may be shared which are most probably for utility methods or for data models. Eg, function to find the age of a person from dob/ date filter and so on. These blocks are called Shared Blocks. 

### **Package Block**

When multiple Blocks are combined together into a unit, such an arrangement is called a Package Block or PB.

UI, Fn, and shared Blocks have their own repositories. They are the building blocks of an application.

Once all the Blocks are stitched together, we build a configuration that is a snapshot of how the apps are composed.

This configuration can be pulled and run on any machine using BB CLI. We call this hypothetical entity a Package Block.

It's a collection of Blocks that will act together as an application.

### **Block.config.json**

This is a configuration file found in the root folder of all types of Blocks including PB.

It will hold the meta information of the Block, which can be read by the CLI / registry to identify the Type of Block, its repository, version, etc.

In case of PB, its blocks.config.json will have meta-information about all the Blocks used in it and other necessary metadata about its runtime.

This configuration resides in the Blocks registry and can be pulled by anyone who has the right access privileges.

BB CLI has APIs that can read this config, pull the dependencies and run them on the local machine.

We use this configuration file to get the necessary information while deploying. Without this configuration, app deployment won't work.