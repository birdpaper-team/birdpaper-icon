import type { App } from 'vue';
import _IconWindow2Fill from './icon-window-2-fill.vue';

const IconWindow2Fill = Object.assign(_IconWindow2Fill, {
  install: (app: App) => {
    app.component(_IconWindow2Fill.name, _IconWindow2Fill);
  }
});

export default IconWindow2Fill;