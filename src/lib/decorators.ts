import {getWorkbox} from './methods';

export function GetWorkbox() {
  return function (target: Object, propertyKey: string) {
    Reflect.defineProperty(target, propertyKey, {
      get: () => getWorkbox(),
      enumerable: false,
      configurable: false,
    });
  };
}
