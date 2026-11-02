import { useEffect, useRef } from 'react';

const SRC = 'https://elfsightcdn.com/platform.js';

/**
 * Loads the Elfsight Google Reviews script once the visitor has interacted
 * with the page (scroll, tap, key) and the widget is near the viewport. The
 * script is heavy (~4s of CPU on mobile), so loading it during page load hurt
 * page speed for every visitor.
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
    let visible = false;
    let interacted = false;
    const maybeLoad = () => visible && interacted && load();
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    const onInteract = () => {
      interacted = true;
      events.forEach((e) => window.removeEventListener(e, onInteract));
      maybeLoad();
    };
    events.forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }));
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          visible = true;
          observer.disconnect();
          maybeLoad();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      events.forEach((e) => window.removeEventListener(e, onInteract));
    };
  }, []);
  return ref;
}
