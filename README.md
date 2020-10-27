# fireAndForget
Handles firing an API call without awaiting for a response.

## Table of Contents

- [Install](#install)
- [Usage](#usage)

## Install

- Node.js 14+ is required.

### Set Up

```sh
git clone git@github.com:digitalbazaar/fireAndForget.git
cd fireAndForget
npm install
```

## Usage

This library exports the following function:

* `fireAndForget`

### `fireAndForget()`

```js
import {fireAndForget} from '@digitalbazaar/fire-and-forget';

fireAndForget({errorMessage, logger, promise});
```
