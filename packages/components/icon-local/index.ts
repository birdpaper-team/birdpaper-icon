import type { App } from 'vue';
import _IconLocal from './icon-local.vue';

const IconLocal = Object.assign(_IconLocal, {
  install: (app: App) => {
    app.component(_IconLocal.name, _IconLocal);
  }
});

export default IconLocal;