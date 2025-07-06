import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Head } from './Head';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Head />
    <App />
  </StrictMode>,
)
