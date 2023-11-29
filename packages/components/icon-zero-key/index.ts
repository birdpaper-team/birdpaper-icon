import type { App } from 'vue';
import _IconZeroKey from './icon-zero-key.vue';

const IconZeroKey = Object.assign(_IconZeroKey, {
  install: (app: App) => {
    app.component(_IconZeroKey.name, _IconZeroKey);
  }
});

export default IconZeroKey;