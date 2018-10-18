# README

There is a problem with the polyfill we use to test fetch invocations. So, we have to replace it.

A diff of properly configuring fetch-mock [is available]( https://github.com/LaunchAcademy/fetch-mock-fix/pull/1/files)

## Fix Details

### Add Dependencies 

```bash
yarn add fetch-mock@5 babel-plugin-transform-runtime fetch-ponyfill --dev
```

### Modify Karma config file

In `karma.conf.js`, delete the line:

```
  exclude: /node_modules/,
```

### Modify the Test Helper

In `spec/javascript/testHelper.js`, modify the top so that it resembles:

```javascript
import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import 'jasmine-ajax';
import fetchPonyfill from 'fetch-ponyfill';
const {fetch, Request, Response, Headers} = fetchPonyfill({});

Object.assign(global, {
  jasmineEnzyme,
  mount,
  React,
  shallow,
  fetch,
  Request,
  Response,
  Headers
});
```

### Import fetchMock

In your tests where you must make use of `fetchMock`, import it.

```javascript
import fetchMock from 'fetch-mock'
```
