import { useEffect, useRef } from 'react';

const SRC = 'https://elfsightcdn.com/platform.js';

/**
 * Loads the Elfsight Google Reviews script only when its widget is about to
 * scroll into view. The script is heavy (~4s of CPU on mobile), so loading it
 * up front hurt page speed for every visitor.
 */
export function useLazyElfsight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const load = () => {
      if (document.querySelector(`script[src="${SRC}"]`)) return;
      const script = document.createElement('script');
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    };
    if (!('IntersectionObserver' in window)) return load();
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
