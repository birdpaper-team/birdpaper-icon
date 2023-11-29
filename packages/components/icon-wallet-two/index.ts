import type { App } from 'vue';
import _IconWalletTwo from './icon-wallet-two.vue';

const IconWalletTwo = Object.assign(_IconWalletTwo, {
  install: (app: App) => {
    app.component(_IconWalletTwo.name, _IconWalletTwo);
  }
});

export default IconWalletTwo;