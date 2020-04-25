# Dynamic string

“One day I will find the right words, and they will be simple.”
Jack Kerrouac

A curried dynamic template string for those who need to reuse intepolation in js

`yarn add dynamic-string`
`npm i rdynamic-string`

## Getting started

```js
import { dynamicString } from 'dynamic-string'

const string = dynamicString('Hello ${name}', { name: 'João' }) // 'Hello João'
const stringFn = dynamicString('Hey ${name}') // fn ({name}) => `Hey ${name}`
```
