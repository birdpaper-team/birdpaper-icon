import type { App } from 'vue';
import _IconWallet from './icon-wallet.vue';

const IconWallet = Object.assign(_IconWallet, {
  install: (app: App) => {
    app.component(_IconWallet.name, _IconWallet);
  }
});

export default IconWallet;