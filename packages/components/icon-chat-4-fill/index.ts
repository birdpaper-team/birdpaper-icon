import type { App } from 'vue';
import _IconChat4Fill from './icon-chat-4-fill.vue';

const IconChat4Fill = Object.assign(_IconChat4Fill, {
  install: (app: App) => {
    app.component(_IconChat4Fill.name, _IconChat4Fill);
  }
});

export default IconChat4Fill;