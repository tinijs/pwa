# TiniJS PWA

> [!IMPORTANT]
> This previously experiment is wrapped up, moving forward the development will happen at <https://github.com/tinijs/tinijs/tree/main/packages/pwa>.
>
> If you want to use the experimental version still, please use the version `0.16.0`.

The PWA module for TiniJS apps.

It uses [workbox-window](https://developer.chrome.com/docs/workbox/using-workbox-window/) under the hood.

## Install

To manually install the module: `npm i @tinijs/pwa@0.16.0`

It is recommended to download the [Skeleton](https://github.com/tinijs/skeleton) for a ready-to-use structured project.

Or, install and setup a complete PWA app via the [@tinijs/cli](https://github.com/tinijs/cli) CLI tool:

- Install the CLI: `npm i @tinijs/cli@0.16.0`
- Add PWA capability: `npx tini pwa init`

For more, please visit: <https://tinijs.dev>

## Usage

- Expose an API endpoint-ish in `sw.js`

```js
addEventListener('message', event => {
  if (event.data.type === 'endpoint-1') {
    event.ports[0].postMessage({ data: 'a payload' });
  }
});
```

- Communicate with the Service Worker

```ts
import {UseWorkbox, Workbox} from '@tinijs/pwa';

@Page({
  name: 'app-page-home',
})
export class AppPageHome extends TiniComponent {
  @UseWorkbox() workbox!: Workbox;

  onReady() {
    this.workbox
      .messageSW({type: 'endpoint-1'})
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
