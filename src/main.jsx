import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components basic
import Example from './components/ExampleBase'

// components using props -> children
import ExampleChildren from './components/ExampleChildren'

// components using props -> parameters
import ExampleParameters from './components/ExampleParameters'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>

    <ExampleChildren>
      <h1>This is a "Example Children" component</h1>
    </ExampleChildren>

    <ExampleParameters title="This is" description="a component using props parameters"/>
  </StrictMode>,
)
