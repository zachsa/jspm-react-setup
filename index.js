import React from 'https://dev.jspm.io/react'
import babel from 'https://dev.jspm.io/@babel/core'
import jsx from 'https://dev.jspm.io/@babel/plugin-transform-react-jsx'

const appString = '() => <div>hello world</div>'
export default eval(babel.transform(appString, {
  plugins: [jsx]
}).code)