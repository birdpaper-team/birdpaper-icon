import type { App } from 'vue';
import _IconWallet2Fill from './icon-wallet-2-fill.vue';

const IconWallet2Fill = Object.assign(_IconWallet2Fill, {
  install: (app: App) => {
    app.component(_IconWallet2Fill.name, _IconWallet2Fill);
  }
});

export default IconWallet2Fill;