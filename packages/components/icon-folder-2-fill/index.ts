import type { App } from 'vue';
import _IconFolder2Fill from './icon-folder-2-fill.vue';

const IconFolder2Fill = Object.assign(_IconFolder2Fill, {
  install: (app: App) => {
    app.component(_IconFolder2Fill.name, _IconFolder2Fill);
  }
});

export default IconFolder2Fill;