import type { App } from 'vue';
import _IconWallet3Fill from './icon-wallet-3-fill.vue';

const IconWallet3Fill = Object.assign(_IconWallet3Fill, {
  install: (app: App) => {
    app.component(_IconWallet3Fill.name, _IconWallet3Fill);
  }
});

export default IconWallet3Fill;