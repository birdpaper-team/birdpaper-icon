import type { App } from 'vue';
import _IconLayout3Fill from './icon-layout-3-fill.vue';

const IconLayout3Fill = Object.assign(_IconLayout3Fill, {
  install: (app: App) => {
    app.component(_IconLayout3Fill.name, _IconLayout3Fill);
  }
});

export default IconLayout3Fill;