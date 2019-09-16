import { html, render } from 'https://dev.jspm.io/lit-html'

const Title = ({title}) => html`<p>${title}</p>`
const Name = ({name}) => html`<p>${name}</p>`

const App = props => html`
<div>
  ${Title(props)}
  <div>
    ${Name(props)}
  </div>
</div>
`

export default App

setTimeout(() => {
  render(App({name: 'im going to replace a previously added dom node', title: 'Test 2'}), document.querySelector('div > div'))
}, 2000);