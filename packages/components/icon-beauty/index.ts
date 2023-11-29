import type { App } from 'vue';
import _IconBeauty from './icon-beauty.vue';

const IconBeauty = Object.assign(_IconBeauty, {
  install: (app: App) => {
    app.component(_IconBeauty.name, _IconBeauty);
  }
});

export default IconBeauty;