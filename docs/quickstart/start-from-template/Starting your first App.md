---
title: Start and Debug Application.
sidebar_position: 5
---
Run ```bb start```

[https://lh3.googleusercontent.com/TspMIqtW2E_S31Q8yJ_O7t7B0H14HoK2dcEuNCNccmG10r0SlO-g3vg_8tlO_1x1FuOukO7DomPMdbQC1vppU_bXaDBDrMa6bRHPvR3lBnSKMhZ6LflAjnuamBksQyl0yzzWuukOgtJJd_4m5ONUWhg](https://lh3.googleusercontent.com/TspMIqtW2E_S31Q8yJ_O7t7B0H14HoK2dcEuNCNccmG10r0SlO-g3vg_8tlO_1x1FuOukO7DomPMdbQC1vppU_bXaDBDrMa6bRHPvR3lBnSKMhZ6LflAjnuamBksQyl0yzzWuukOgtJJd_4m5ONUWhg)

This will start all UI Blocks in HMR Mode and use ```bb ls``` to see its running port and info. For the Backend block, everything will be in a single port (that our CLI will act as a gateway to stitch all functions together.)

[https://lh3.googleusercontent.com/eDu8eDL5oCnG9iXaOfYqZqjfLuWUYYzHE_fzOeeJy9dDzysJ-lLlNNm5Q0DPPuKq5tHV1hfFO0N_1FTTrUF7_g1Um4rPvLFJ2M-NSLzbxO08JMKmBAwo8BPgsVqCU3R71fQw2HS4TkbLtWbubv-bcHs](https://lh3.googleusercontent.com/eDu8eDL5oCnG9iXaOfYqZqjfLuWUYYzHE_fzOeeJy9dDzysJ-lLlNNm5Q0DPPuKq5tHV1hfFO0N_1FTTrUF7_g1Um4rPvLFJ2M-NSLzbxO08JMKmBAwo8BPgsVqCU3R71fQw2HS4TkbLtWbubv-bcHs)

Open todo_container_block in your browser.

Tada! Now we have a working Todo app.

[https://lh5.googleusercontent.com/CdO0M6LhFdguwxYYksoLcNpKvFbmOQIqV4UbAwEW0FkWoLO3Qb8gujSP5JDJhQ9_nNE7mUy2mWNUTQDUJKeWEegkwUF0qcwuwz5Fv4O7pscXKLfuNYEmpPfKSIoZQNcMLq-nAaNnSmoFI77WI9k4znc](https://lh5.googleusercontent.com/CdO0M6LhFdguwxYYksoLcNpKvFbmOQIqV4UbAwEW0FkWoLO3Qb8gujSP5JDJhQ9_nNE7mUy2mWNUTQDUJKeWEegkwUF0qcwuwz5Fv4O7pscXKLfuNYEmpPfKSIoZQNcMLq-nAaNnSmoFI77WI9k4znc)

Okay, so let’s talk in detail:

- In the above example, there is 1 UI Container(Host) Block, 2 UI Element Blocks, and 3 Functions Blocks.
- Container/ Host is running in 3001 ( might be different in your machine, use bb ls ).
- To visit the application you have to open the Container URL in the browser since the container is the frontend orchestrator which stitches all the elements together.
- CLI creates a local gateway server to proxy all the functions to run everything in a single port. ( here on 3007 port )
- You can use .env.function to manage backend env variables, which will already have a gateway URL by default ( “BLOCK_FUNCTION_URL” ).
- use .env.views to manage frontend env variables, contains remote entry URL of all elements.

Go to the commands section to try out more features that CLI provides.