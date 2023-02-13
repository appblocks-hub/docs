---
title: Start and Debug Application.
sidebar_position: 5
---
Run ```bb start```

![image](https://user-images.githubusercontent.com/33730398/218434055-04ed3ceb-01d2-4ec4-853b-1dc10ee81ee4.png)

This will start all UI Blocks in HMR Mode and use ```bb ls``` to see its running port and info. For the Backend block, everything will be in a single port (that our CLI will act as a gateway to stitch all functions together.)

![image](https://user-images.githubusercontent.com/33730398/218434194-bc357f4c-925c-4956-854b-23b6436e95e4.png)

Open ```todo_container_block``` in your browser.

Tada! Now we have a working Todo app.

![image](https://user-images.githubusercontent.com/33730398/218434327-5595fab8-8c6a-4cc1-a886-6911e77d0392.png)

Okay, so let’s talk in detail:

- In the above example, there is 1 UI Container(Host) Block, 2 UI Element Blocks, and 3 Function Blocks.
- Container/ Host is running in 3001 ( might be different in your machine, use bb ls ).
- To visit the application you have to open the Container URL in the browser since the container is the frontend orchestrator which stitches all the elements together.
- CLI creates a local gateway server to proxy all the functions to run everything in a single port. ( here on 3007 port )
- You can use .env.function to manage backend env variables, which will already have a gateway URL by default ( “BLOCK_FUNCTION_URL” ).
- use .env.views to manage frontend env variables, contains remote entry URL of all elements.

Go to the commands section to try out more features that CLI provides.
