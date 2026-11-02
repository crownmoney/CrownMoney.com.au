import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App, { preloadRoute } from './App.tsx';
import './index.css';

// Pages are pre-rendered to static HTML at build time (see scripts/prerender.mjs)
// so crawlers see full content. The client hydrates that HTML in place.
// Drop the pre-rendered head tags; React renders the live set for each route.
document.head.querySelectorAll('[data-prerender]').forEach((el) => el.remove());

const root = document.getElementById('root')!;
preloadRoute(window.location.pathname).finally(() => {
  hydrateRoot(
    root,
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
  );
});
