# TiniJS PWA

The PWA module for TiniJS apps.

It uses [workbox-window](https://developer.chrome.com/docs/workbox/using-workbox-window/) under the hood.

## Install

To manually install the module: `npm i @tinijs/core`

It is recommended to download the [Skeleton](https://github.com/tinijs/skeleton) for a ready-to-use structured project.

Or, install and setup a complete PWA app via the [@tinijs/cli](https://github.com/tinijs/cli) CLI tool:

- Install the CLI: `npm i -g @tinijs/cli`
- Add PWA capability: `tini pwa init`

For more, please visit: <https://tinijs.dev>

## Usage

- Expose an API endpoint-ish in `sw.js`

```js
const SW_VERSION = '1.0.0';

addEventListener('message', event => {
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage(SW_VERSION);
  }
});
```

- Communicate with the Service Worker

```ts
import {UseWorkbox, Workbox} from '@tinijs/pwa';

@Page('page-home')
export class PageHome extends TiniComponent {
  @UseWorkbox() workbox!: Workbox;

  onReady() {
    this.workbox
      .messageSW({type: 'GET_VERSION'})
      .then(swVersion => {});
  }
}
```

## API

// TODO

## Developement

- Create a home for TiniJS: `mkdir TiniJS && cd TiniJS`
- Fork the repo: `git clone https://github.com/tinijs/pwa.git`
- Install dependencies: `cd pwa && npm i`
- Make changes & preview locally: `npm run build && npm pack`
- Push changes & create a PR 👌

## License

**@tinijs/pwa** is released under the [MIT](https://github.com/tinijs/pwa/blob/master/LICENSE) license.
