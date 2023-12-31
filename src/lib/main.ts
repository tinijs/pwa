import {Workbox} from 'workbox-window';

import {TINI_APP_CONTEXT, SW_UNSUPPORTED_ERROR} from './consts';

export function registerServiceWorker(swPath?: string) {
  if (!('serviceWorker' in navigator)) throw new Error(SW_UNSUPPORTED_ERROR);
  // register service worker
  const workbox = new Workbox(swPath || '/sw.js');
  workbox.register();
  // result
  return (TINI_APP_CONTEXT.workbox = workbox);
}
