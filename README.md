# TiniJS PWA

The PWA module for TiniJS apps.

It uses [workbox-window](https://developer.chrome.com/docs/workbox/using-workbox-window/) under the hood.

## Install

To manually install the module: `npm i @tinijs/pwa`

It is recommended to download the [Skeleton](https://github.com/tinijs/skeleton) for a ready-to-use structured project.

Or, install and setup a complete PWA app via the [@tinijs/cli](https://github.com/tinijs/cli) CLI tool:

- Install the CLI: `npm i -g @tinijs/cli`
- Add PWA capability: `tini pwa init`

For more, please visit: <https://tinijs.dev> (TODO)

## Usage

- Expose an API endpoint-ish in `sw.js`

```js
addEventListener('message', event => {
  if (event.data.type === 'ENDPOINT_1') {
    event.ports[0].postMessage({ data: 'a payload' });
  }
});
```

- Communicate with the Service Worker

```ts
import {GetWorkbox, Workbox} from '@tinijs/pwa';

@Page({
  name: 'app-page-home',
})
export class AppPageHome extends TiniComponent {
  @GetWorkbox() workbox!: Workbox;

  onReady() {
    this.workbox
      .messageSW({type: 'ENDPOINT_1'})
      .then(value => {
        // do something with the value returned from the SW
      });
  }
}
```

## API

// TODO

## Developement

- Create a home for TiniJS: `mkdir TiniJS && cd TiniJS`
- Fork the repo
- Install dependencies: `cd pwa && npm i`
- Make changes & preview locally: `npm run build && npm pack`
- Push changes & create a PR 👌

## License

**@tinijs/pwa** is released under the [MIT](https://github.com/tinijs/pwa/blob/master/LICENSE) license.
