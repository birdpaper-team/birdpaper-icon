import type { App } from 'vue';
import _IconLayout5Fill from './icon-layout-5-fill.vue';

const IconLayout5Fill = Object.assign(_IconLayout5Fill, {
  install: (app: App) => {
    app.component(_IconLayout5Fill.name, _IconLayout5Fill);
  }
});

export default IconLayout5Fill;