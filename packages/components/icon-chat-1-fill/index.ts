import type { App } from 'vue';
import _IconChat1Fill from './icon-chat-1-fill.vue';

const IconChat1Fill = Object.assign(_IconChat1Fill, {
  install: (app: App) => {
    app.component(_IconChat1Fill.name, _IconChat1Fill);
  }
});

export default IconChat1Fill;