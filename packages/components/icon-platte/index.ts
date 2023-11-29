import type { App } from 'vue';
import _IconPlatte from './icon-platte.vue';

const IconPlatte = Object.assign(_IconPlatte, {
  install: (app: App) => {
    app.component(_IconPlatte.name, _IconPlatte);
  }
});

export default IconPlatte;