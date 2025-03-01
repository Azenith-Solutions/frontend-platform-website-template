import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components basic
import Example from './components/ExampleBase'

// components using props -> children
import ExampleChildren from './components/ExampleChildren'

// components using props -> parameters
import ExampleParameters from './components/ExampleParameters'

// components using tailwind ui css
import './styles/tailwind.css' // importing tailwind on the page, the olders styles gonna be changed also.
import ExampleTailwind from './components/ExampleTailwind'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>

    <ExampleChildren>
      <h1>This is a "Example Children" component</h1>
    </ExampleChildren>

    <ExampleParameters title="This is" description="a component using props parameters"/>

    <ExampleTailwind/>
  </StrictMode>,
)
