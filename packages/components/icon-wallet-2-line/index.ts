import type { App } from 'vue';
import _IconWallet2Line from './icon-wallet-2-line.vue';

const IconWallet2Line = Object.assign(_IconWallet2Line, {
  install: (app: App) => {
    app.component(_IconWallet2Line.name, _IconWallet2Line);
  }
});

export default IconWallet2Line;