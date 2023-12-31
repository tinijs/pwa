import {TINI_APP_CONTEXT, NO_PWA_ERROR} from './consts';

export function getWorkbox() {
  if (!TINI_APP_CONTEXT.workbox) throw new Error(NO_PWA_ERROR);
  return TINI_APP_CONTEXT.workbox;
}
