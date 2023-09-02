import {Workbox} from 'workbox-window';
import {getAppInstance} from '@tinijs/core';

import {NO_PWA_ERROR} from './consts';

export function getWorkbox() {
  const workbox = getAppInstance().workbox as undefined | Workbox;
  if (!workbox) throw new Error(NO_PWA_ERROR);
  return workbox;
}
