import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components basic
import Example from './components/Example'

// components using props -> children
import ExampleChildren from './components/ExampleChildren'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>
    <ExampleChildren>
      <h1>This is a "Example Children" component</h1>
    </ExampleChildren>
  </StrictMode>,
)
