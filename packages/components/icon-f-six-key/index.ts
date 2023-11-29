import type { App } from 'vue';
import _IconFSixKey from './icon-f-six-key.vue';

const IconFSixKey = Object.assign(_IconFSixKey, {
  install: (app: App) => {
    app.component(_IconFSixKey.name, _IconFSixKey);
  }
});

export default IconFSixKey;