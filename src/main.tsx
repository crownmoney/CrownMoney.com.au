import 'whatwg-fetch';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// The whatwg-fetch polyfill is already imported above.
// It will safely polyfill fetch, Headers, Request, and Response if they are missing.
// It does NOT attempt to overwrite them if they already exist, avoiding read-only property errors.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
