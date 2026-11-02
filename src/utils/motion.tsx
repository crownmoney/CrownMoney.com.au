// Wrapper around motion/react used by every component.
//
// Pages are pre-rendered to HTML. On the first page load we want that HTML to
// be visible immediately (fast Largest Contentful Paint), so entrance
// animations are skipped while the server renders and while the browser
// hydrates: `initial` is forced to false, which renders elements in their
// final state. Animations run normally on later client-side navigation.
import React, { forwardRef } from 'react';
import { motion as baseMotion } from 'motion/react';

export { AnimatePresence } from 'motion/react';

let skipEntranceAnimations = true;

/** Called once hydration has finished; re-enables entrance animations. */
export function enableEntranceAnimations() {
  skipEntranceAnimations = false;
}

const cache = new Map<PropertyKey, any>();

export const motion = new Proxy(baseMotion, {
  get(target, key) {
    const Component = (target as any)[key];
    if (typeof key !== 'string' || !Component) return Component;
    if (!cache.has(key)) {
      const Wrapped = forwardRef<any, any>((props, ref) => {
        // Decided at mount: elements already on screen keep no entrance animation.
        const [skip] = React.useState(() => skipEntranceAnimations && props.initial !== undefined);
        return <Component ref={ref} {...props} initial={skip ? false : props.initial} />;
      });
      Wrapped.displayName = `motion.${key}`;
      cache.set(key, Wrapped);
    }
    return cache.get(key);
  },
}) as typeof baseMotion;
