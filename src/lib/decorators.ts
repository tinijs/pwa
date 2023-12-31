import {getWorkbox} from './methods';

export function UseWorkbox() {
  return function (prototype: any, propertyKey: string) {
    Object.defineProperty(prototype, propertyKey, {
      get: () => getWorkbox(),
    });
  };
}
