import type { App } from 'vue';
import _IconChat1Fill2 from './icon-chat-1-fill-2.vue';

const IconChat1Fill2 = Object.assign(_IconChat1Fill2, {
  install: (app: App) => {
    app.component(_IconChat1Fill2.name, _IconChat1Fill2);
  }
});

export default IconChat1Fill2;