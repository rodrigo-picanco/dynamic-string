# Dynamic string
A curried dynamic template string for those who need to reuse string intepolation in javascript in things such as api endpoints, user context based text, etc.

## Install

`yarn add dynamic-string`

`npm i dynamic-string`

## Getting started
Import from the library `dynamic-string` the named export `dynamicString`.
```js
import { dynamicString } from 'dynamic-string'
```
This is a curried function which receives two positional arguments: a template string with interpolations with `${}` and an object with the variables to be interpolated as keys. 


```js
const string = dynamicString('https://api.com/${id}', { id: '12101909' }) // https://api.com/12101909

const stringFn = dynamicString('Hey ${name}') // fn ({name}) => `Hey ${name}`
```

## Other examples

- [Rendering html](https://codesandbox.io/s/dynamic-string-html-interpolation-ym90q?file=/src/index.js)
