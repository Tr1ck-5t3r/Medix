import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Router>
          <App />
        </Router>
    </ClerkProvider>
  </StrictMode>,
)
