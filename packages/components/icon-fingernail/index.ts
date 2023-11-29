import type { App } from 'vue';
import _IconFingernail from './icon-fingernail.vue';

const IconFingernail = Object.assign(_IconFingernail, {
  install: (app: App) => {
    app.component(_IconFingernail.name, _IconFingernail);
  }
});

export default IconFingernail;