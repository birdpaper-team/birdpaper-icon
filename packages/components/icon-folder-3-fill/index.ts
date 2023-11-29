import type { App } from 'vue';
import _IconFolder3Fill from './icon-folder-3-fill.vue';

const IconFolder3Fill = Object.assign(_IconFolder3Fill, {
  install: (app: App) => {
    app.component(_IconFolder3Fill.name, _IconFolder3Fill);
  }
});

export default IconFolder3Fill;