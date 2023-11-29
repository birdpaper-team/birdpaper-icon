import type { App } from 'vue';
import _IconFNKey from './icon-f-n-key.vue';

const IconFNKey = Object.assign(_IconFNKey, {
  install: (app: App) => {
    app.component(_IconFNKey.name, _IconFNKey);
  }
});

export default IconFNKey;