import type { App } from 'vue';
import _IconFNineKey from './icon-f-nine-key.vue';

const IconFNineKey = Object.assign(_IconFNineKey, {
  install: (app: App) => {
    app.component(_IconFNineKey.name, _IconFNineKey);
  }
});

export default IconFNineKey;