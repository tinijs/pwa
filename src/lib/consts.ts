import {Workbox} from 'workbox-window';
import {TINI_APP_CONTEXT as BASE_TINI_APP_CONTEXT} from '@tinijs/core';

export const MODULE_NAME = 'pwa';
export const MODULE_ID = `tini:${MODULE_NAME}`;

export const TINI_APP_CONTEXT =
  BASE_TINI_APP_CONTEXT as typeof BASE_TINI_APP_CONTEXT & {
    workbox?: Workbox;
  };

export const NO_PWA_ERROR = 'PWA module is not initialized.';
export const SW_UNSUPPORTED_ERROR = 'Service worker not supported.';
