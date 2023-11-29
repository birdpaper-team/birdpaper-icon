import type { App } from 'vue';
import _IconDeleteKey from './icon-delete-key.vue';

const IconDeleteKey = Object.assign(_IconDeleteKey, {
  install: (app: App) => {
    app.component(_IconDeleteKey.name, _IconDeleteKey);
  }
});

export default IconDeleteKey;