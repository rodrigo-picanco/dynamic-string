# Dynamic string
Reuse string interpolation in JavaScript. `dynamic-string` is a a curried dynamic template string. 

You can use it to replace id's in API endpoints, username's in greetings or whatever your imagination leads to :)

## Install

`yarn add dynamic-string`

`npm i dynamic-string`

## Getting started
Import `dynamicString` from `dynamic-string` .

```js
import { dynamicString } from 'dynamic-string'
```

This [curried function](https://en.wikipedia.org/wiki/Currying) receives two positional arguments:

- A string template with '${}' for interpolation
- An object with the variables to be interpolated as keys. 

You can use it directly or not, as in:

```js
const string = dynamicString('https://api.com/${id}', { id: '12101909' }) // https://api.com/12101909

const stringFn = dynamicString('Hey ${name}') // fn ({name}) => `Hey ${name}`
```

## Other examples

- [Rendering html](https://codesandbox.io/s/dynamic-string-html-interpolation-ym90q?file=/src/index.js)
