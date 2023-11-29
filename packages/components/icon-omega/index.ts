import type { App } from 'vue';
import _IconOmega from './icon-omega.vue';

const IconOmega = Object.assign(_IconOmega, {
  install: (app: App) => {
    app.component(_IconOmega.name, _IconOmega);
  }
});

export default IconOmega;