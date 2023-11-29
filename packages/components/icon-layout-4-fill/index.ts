import type { App } from 'vue';
import _IconLayout4Fill from './icon-layout-4-fill.vue';

const IconLayout4Fill = Object.assign(_IconLayout4Fill, {
  install: (app: App) => {
    app.component(_IconLayout4Fill.name, _IconLayout4Fill);
  }
});

export default IconLayout4Fill;