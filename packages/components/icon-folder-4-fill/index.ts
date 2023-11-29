import type { App } from 'vue';
import _IconFolder4Fill from './icon-folder-4-fill.vue';

const IconFolder4Fill = Object.assign(_IconFolder4Fill, {
  install: (app: App) => {
    app.component(_IconFolder4Fill.name, _IconFolder4Fill);
  }
});

export default IconFolder4Fill;