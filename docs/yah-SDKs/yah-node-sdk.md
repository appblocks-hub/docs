# yah-node-sdk

This includes the server-side libraries used by applications using Yahilo services.

## Installation

This SDK is distributed via:

[npm package](https://www.npmjs.com/package/yah-node-sdk)

```
npm install yah-node-sdk
```

For source code, see the [Node Blox SDK Github repo](https://github.com/yahilo/yah-node-sdk/tree/main).

## Modules

This Node blox SDK included following modules,

1. [Functions SDK](#functions-sdk)
2. [Internals SDK](#internals-sdk)
3. [Shield SDK](#shield-sdk)
4. [Environment SDK](#environment-sdk)

### Functions SDK

Functions SDK module is used to run the appblox functions.

Run Handler / Function using run method by importing functions sdk from node-blox-sdk.

#### Functions

run () : void

#### Example

```
import { functions } from "node-blox-sdk";

functions.run(ExampleHandler)
```

To work with functions in local, There are 2 options.

1. Using emulator

Make use of appblox emulator. Emulator will act as a proxy, instead of we pointing and managing multiple port emulator will takecare of that hard jobsm
then run functions.

```
cd ./examples/functions-example
node index.js
```

the above command will run function in port provided by emulator.

2. Assigning a port manually using flags.

Use the flag --port to run the function in specific port

```
cd ./examples/functions-example/
npm index.js --port=3000
```

the above command will run function in port 3000

go to [functions-example repo](https://github.com/AppBlox/node-blox-sdk/tree/main/examples/functions-example) to see example.

### Internals SDK

Internals SDK module is used to initialize the app using credentials from Appblox app, so that only your account and its resources are accessed by the SDK.

#### Functions

initialize ( options: Object ) :void

##### Parameters

options Object: { clientId : string, clientSecret : string }

#### Example

```
import { internals } from "node-blox-sdk";

internals.initialize({
		clientId:     APPBLOX_APP_CLIENT_ID,
		clientSecret: APPBLOX_APP_CLIENT_SECRET,
	})
```

### Shield SDK

Shield SDK module is used to implement and interact with the appblox shield.

:::note
Before using shield, Initialze the application using internals SDK.
:::

#### Functions

getUser( request : ResquestObject ) : ShieldUserResponse
getUID( request : ResquestObject ) : ShieldUIDResponse

#### Example

```
import { shield, internals } from "node-blox-sdk";

// Initialize using appblox credentials
internals.initialize({
		clientId:     APPBLOX_APP_CLIENT_ID,
		clientSecret: APPBLOX_APP_CLIENT_SECRET,
	})

const SheildExampleHandler = async (req, res, next) => {
  try {

    // Get user details using shield
    const userDetails = await shield.getUser(req);

    // Get user uid using shield
    const userUID = await shield.getUID(req);

  } catch (error) {
    // handle the error
  }
};
```

go to [shield-example repo](https://github.com/AppBlox/node-blox-sdk/tree/main/examples/shield-example) to see example.

### Environment SDK

Environment SDK module is used initialize the enviroments, So that blox functions can access the environments.

#### Functions

init() : void

#### Example

```
import { env } from "node-blox-sdk";

// Initialize the env
env.init();

const envExampleHandler = async (req, res, next) => {
  try {
      const MY_SECRET = process.env.MY_SECRET
      // Your code
  } catch (error) {
    // handle the error
  }
};
```

go to [env-example repo](https://github.com/AppBlox/node-blox-sdk/tree/main/examples/env-example) to see example.
