import type { App } from 'vue';
import _IconBitcoin from './icon-bitcoin.vue';

const IconBitcoin = Object.assign(_IconBitcoin, {
  install: (app: App) => {
    app.component(_IconBitcoin.name, _IconBitcoin);
  }
});

export default IconBitcoin;