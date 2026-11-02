import React, { lazy, Suspense, type ComponentType } from 'react';

type Loader = () => Promise<{ default: ComponentType<any> }>;

const preloaders: Loader[] = [];

/**
 * Code-split page component that can be loaded ahead of rendering.
 * main.tsx preloads the current route's chunk before React renders, so the
 * pre-rendered HTML is replaced by identical content with no loading flash;
 * other pages load on navigation.
 */
export function lazyPage(loader: Loader) {
  let Loaded: ComponentType<any> | null = null;
  const load = () =>
    loader().then((m) => {
      Loaded = m.default;
      return m;
    });
  const Lazy = lazy(load);
  const Page = (props: any) =>
    Loaded ? (
      <Loaded {...props} />
    ) : (
      <Suspense fallback={<div className="min-h-screen" />}>
        <Lazy {...props} />
      </Suspense>
    );
  Page.preload = load;
  preloaders.push(load);
  return Page as ComponentType<any> & { preload: Loader };
}

/** Load every page (used by the build-time pre-renderer). */
export const preloadAllPages = () => Promise.all(preloaders.map((p) => p()));
