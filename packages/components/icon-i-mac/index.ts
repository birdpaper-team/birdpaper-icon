import type { App } from 'vue';
import _IconIMac from './icon-i-mac.vue';

const IconIMac = Object.assign(_IconIMac, {
  install: (app: App) => {
    app.component(_IconIMac.name, _IconIMac);
  }
});

export default IconIMac;