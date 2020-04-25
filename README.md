# Dynamic template string

“One day I will find the right words, and they will be simple.”
Jack Kerrouac

A curried dynamic template string for those who need to reuse intepolation in js

`yarn add react-async-renderer`
`npm i react-async-renderer`

## Getting started

```jsx
import React from 'react'
import { AsyncRenderer } from 'react-async-renderer'

export default (props) => {
  return (
    <AsyncRenderer
      url="endpoint"
      fetcher={fetch} // can be any async fn
      fetcherConfig={{ method: 'GET' }} // the async fn arguments
      loader={() => <p>Loading...</p>}
      render={(reponse) => {
        // do as you please with the response
      }}
    />
  )
}
```
