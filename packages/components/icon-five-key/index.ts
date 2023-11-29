import type { App } from 'vue';
import _IconFiveKey from './icon-five-key.vue';

const IconFiveKey = Object.assign(_IconFiveKey, {
  install: (app: App) => {
    app.component(_IconFiveKey.name, _IconFiveKey);
  }
});

export default IconFiveKey;