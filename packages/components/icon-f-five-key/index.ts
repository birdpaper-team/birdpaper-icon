import type { App } from 'vue';
import _IconFFiveKey from './icon-f-five-key.vue';

const IconFFiveKey = Object.assign(_IconFFiveKey, {
  install: (app: App) => {
    app.component(_IconFFiveKey.name, _IconFFiveKey);
  }
});

export default IconFFiveKey;