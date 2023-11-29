import type { App } from 'vue';
import _IconFZeroKey from './icon-f-zero-key.vue';

const IconFZeroKey = Object.assign(_IconFZeroKey, {
  install: (app: App) => {
    app.component(_IconFZeroKey.name, _IconFZeroKey);
  }
});

export default IconFZeroKey;