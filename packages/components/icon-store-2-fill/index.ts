import type { App } from 'vue';
import _IconStore2Fill from './icon-store-2-fill.vue';

const IconStore2Fill = Object.assign(_IconStore2Fill, {
  install: (app: App) => {
    app.component(_IconStore2Fill.name, _IconStore2Fill);
  }
});

export default IconStore2Fill;