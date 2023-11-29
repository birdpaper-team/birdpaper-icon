import type { App } from 'vue';
import _IconP2pFill from './icon-p2p-fill.vue';

const IconP2pFill = Object.assign(_IconP2pFill, {
  install: (app: App) => {
    app.component(_IconP2pFill.name, _IconP2pFill);
  }
});

export default IconP2pFill;