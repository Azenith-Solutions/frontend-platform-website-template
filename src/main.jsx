import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components
import Example from './components/Example'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>
  </StrictMode>,
)
