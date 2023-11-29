import type { App } from 'vue';
import _IconMessage2Fill from './icon-message-2-fill.vue';

const IconMessage2Fill = Object.assign(_IconMessage2Fill, {
  install: (app: App) => {
    app.component(_IconMessage2Fill.name, _IconMessage2Fill);
  }
});

export default IconMessage2Fill;