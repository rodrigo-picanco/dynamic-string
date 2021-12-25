# Dynamic string

*“One day I will find the right words, and they will be simple.”*

Jack Kerrouac

A curried dynamic template string for those who need to reuse intepolation in js


## Install

`yarn add dynamic-string`

`npm i dynamic-string`

## Getting started

```js
import { dynamicString } from 'dynamic-string'

const string = dynamicString('Hello ${name}', { name: 'João' }) // 'Hello João'
const stringFn = dynamicString('Hey ${name}') // fn ({name}) => `Hey ${name}`
```
## Examples

- [Rendering html](https://codesandbox.io/s/dynamic-string-html-interpolation-ym90q?file=/src/index.js)
