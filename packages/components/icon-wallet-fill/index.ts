import type { App } from 'vue';
import _IconWalletFill from './icon-wallet-fill.vue';

const IconWalletFill = Object.assign(_IconWalletFill, {
  install: (app: App) => {
    app.component(_IconWalletFill.name, _IconWalletFill);
  }
});

export default IconWalletFill;