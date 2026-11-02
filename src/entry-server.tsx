import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url: string) {
  const helmetContext: Record<string, any> = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}

export { PAGES } from './seo/pages';
export { preloadAllPages } from './utils/lazyPage';
