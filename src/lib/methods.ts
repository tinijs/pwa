import {Workbox} from 'workbox-window';
import {getAppInstance, TiniApp, Global} from '@tinijs/core';

export function getWorkbox(): null | Workbox {
  const appOrGlobal = getAppInstance(true);
  return (
    (appOrGlobal as TiniApp).$workbox ||
    (appOrGlobal as Global).$tiniWorkbox ||
    null
  );
}
