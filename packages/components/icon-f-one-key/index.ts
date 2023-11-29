import type { App } from 'vue';
import _IconFOneKey from './icon-f-one-key.vue';

const IconFOneKey = Object.assign(_IconFOneKey, {
  install: (app: App) => {
    app.component(_IconFOneKey.name, _IconFOneKey);
  }
});

export default IconFOneKey;