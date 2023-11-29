import type { App } from 'vue';
import _IconLayout2Fill from './icon-layout-2-fill.vue';

const IconLayout2Fill = Object.assign(_IconLayout2Fill, {
  install: (app: App) => {
    app.component(_IconLayout2Fill.name, _IconLayout2Fill);
  }
});

export default IconLayout2Fill;