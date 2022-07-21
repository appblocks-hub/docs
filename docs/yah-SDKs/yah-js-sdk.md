---
sidebar_position: 5
---

yah-js-sdk
===========

yah-js-sdk provides the essential packages to facilitate Yahilo features across Yahilo applications.

As of now, yah-js-sdk contains the following packages
- shield
- ab-federation-helpers

shield helps to setup authentication for your application. It contains many methods to setup user authentication with shield and obtain tokens across Yahilo applications.

ab-federation-helpers contains hooks and methods to facilitate federated Components and Modules

Installation
---------------
        npm i yah-js-sdk -s

Usage
-----
        import { shield } from 'yah-js-sdk/shield'

        import { useFederatedComponent } from 'yah-js-sdk/ab-federation-helpers'

---
# shield
yah-js-sdk/shield includes the following elements
1. [tokenStore](#tokenStore)
2. [init](#init)
3. [verifyLogin](#verifyLogin)
4. [getAuthUrl](#getAuthUrl)
5. [logout](#logout)


## tokenStore

#### Description
Its an object which stores the token, refresh Token, expiry time as private variables along with related functions. It contains the timer id for the token

#### Usage
    shield.tokenStore.getToken()

## init

#### Description
Its used to initialise the tokenstore with values from the shield backend. It takes a parameter clientID which is unique for each application.

#### Usage

    await shield.init('client-id')

## verifyLogin

#### Description
It retrieves for the token from the localStorage and validates the token. If the token is not present in the localStorage it redirects to the shield login.

#### Usage

    const isLoggedinn = await shield.verifyLogin()

## getAuthUrl

#### Description
It generates authorization URL with query parameters

#### Usage

    const authUrl = shield.getAuthUrl()

## logout

#### Description
It logs out the user by removing the token from localStorage and redirects to shield login.

#### Usage

    await shield.logout()

---


# ab-federation-helpers
ab-federation-helpers includes the following elements
1. [useFederatedComponent](#useFederatedComponent)
2. [useFederatedModule](#useFederatedModule)
3. [useDynamicScript](#useDynamicScript)


## useFederatedComponent

#### Description
used to obtain federated Component . 

#### Usage

    const system = {
        module: './login',
        scope: 'login',
        url: 'http://localhost:3013/remoteEntry.js',
    }
    const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
      system?.url,
      system?.scope,
      system?.module,
      React
    )
    return (
      <React.Suspense fallback={''}>
        {errorLoading
          ? `Error loading module "${module}"`
          : FederatedComponent && <FederatedComponent />}
      </React.Suspense>
    )

## useFederatedModule

#### Description
used to obtain federated Module .

#### Usage

    const system = {
        module: './login',
        scope: 'login',
        url: 'http://localhost:3013/remoteEntry.js',
    }
    const { Component: FederatedModule, errorLoading } = useFederatedModule(
      system?.url,
      system?.scope,
      system?.module,
      React
    )

## useDynamicScript

#### Description
loads script from remote URL.

#### Usage

      const { ready, errorLoading } = useDynamicScript(remoteUrl, React);
