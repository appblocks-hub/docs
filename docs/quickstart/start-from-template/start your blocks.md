---
title: Start your blocks
sidebar_position: 5
---

## Starting Your Blocks

To initiate your blocks, use the following command:

```
bb start
```

Executing the above command will build and serve the blocks on available free ports. By default, the functions will use port 5000, the UI container will use port 5001, and the elements will use port 5002. To verify if everything is functioning properly, access the respective ports in your browser.

### Understanding the Process

Each block in your application functions as a separate app, either as a Node.js app for function blocks or a React app for frontend containers/host apps or element (federated) apps. However, despite having multiple blocks, only three server instances are required to serve them all.

Appblocks CLI provides utilities to aggregate all function blocks together and emulate them using a single node instance. This means that if your code contains 100 function blocks, you don't need to spin up 100 separate server instances. Instead, you need only one.

The same principle applies to frontend applications. There is one host application where all federated elements are dynamically stitched together at runtime. Additionally, there can be multiple element React applications. If you have 100 element applications, you would typically need to start 100 Webpack dev server instances. To simplify this process, Appblocks CLI stitches them all together into a single emulated Webpack dev server, which acts as the remote host for all federated components.

To enable this functionality, you must adhere to a specific directory structure when building the element applications. All components intended for federation, along with their dependencies, should be placed inside a directory named "remote" within the "src" directory.

---
