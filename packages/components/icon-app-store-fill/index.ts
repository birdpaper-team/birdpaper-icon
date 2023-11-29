import type { App } from 'vue';
import _IconAppStoreFill from './icon-app-store-fill.vue';

const IconAppStoreFill = Object.assign(_IconAppStoreFill, {
  install: (app: App) => {
    app.component(_IconAppStoreFill.name, _IconAppStoreFill);
  }
});

export default IconAppStoreFill;