import type { App } from 'vue';
import _IconChat2Fill from './icon-chat-2-fill.vue';

const IconChat2Fill = Object.assign(_IconChat2Fill, {
  install: (app: App) => {
    app.component(_IconChat2Fill.name, _IconChat2Fill);
  }
});

export default IconChat2Fill;