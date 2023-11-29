import type { App } from 'vue';
import _IconFolder5Fill from './icon-folder-5-fill.vue';

const IconFolder5Fill = Object.assign(_IconFolder5Fill, {
  install: (app: App) => {
    app.component(_IconFolder5Fill.name, _IconFolder5Fill);
  }
});

export default IconFolder5Fill;