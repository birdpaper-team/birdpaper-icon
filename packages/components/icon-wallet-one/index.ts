import type { App } from 'vue';
import _IconWalletOne from './icon-wallet-one.vue';

const IconWalletOne = Object.assign(_IconWalletOne, {
  install: (app: App) => {
    app.component(_IconWalletOne.name, _IconWalletOne);
  }
});

export default IconWalletOne;