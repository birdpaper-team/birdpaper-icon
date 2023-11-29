import type { App } from 'vue';
import _IconFm from './icon-fm.vue';

const IconFm = Object.assign(_IconFm, {
  install: (app: App) => {
    app.component(_IconFm.name, _IconFm);
  }
});

export default IconFm;