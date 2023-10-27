---
title: Composition
sidebar_position: 3
---

## Composition

The ability to stitch multiple independently developed blocks of code together seamlessly is called Composability. SDM is the first layer where we establish composability as schemas are the same across the apps and blocks.

### Blocks Dependency

If a block is an essential requirement for another block to run, then the former block is a dependency of the latter.

A UI block with a Fn block integration has the Fn block as its dependency. Similarly, if the Fn block depends on a Shared block (Utility block) for some use case handling, then the shared block is a dependency.

### Package Dependencies

These are the list of Packages (for eg - npm package dependencies) in a block. It is critical for deriving composability, because blocks using different versions or different dependencies may not be composable.

## Appblocks Version

The above attributes of the composition together make one Appblocks version.

Based on the Appblocks version we will choose its supporting SDM models and package dependencies.
