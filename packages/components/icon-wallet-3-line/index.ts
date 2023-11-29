import type { App } from 'vue';
import _IconWallet3Line from './icon-wallet-3-line.vue';

const IconWallet3Line = Object.assign(_IconWallet3Line, {
  install: (app: App) => {
    app.component(_IconWallet3Line.name, _IconWallet3Line);
  }
});

export default IconWallet3Line;