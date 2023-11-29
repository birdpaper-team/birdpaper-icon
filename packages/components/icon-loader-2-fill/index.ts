import type { App } from 'vue';
import _IconLoader2Fill from './icon-loader-2-fill.vue';

const IconLoader2Fill = Object.assign(_IconLoader2Fill, {
  install: (app: App) => {
    app.component(_IconLoader2Fill.name, _IconLoader2Fill);
  }
});

export default IconLoader2Fill;