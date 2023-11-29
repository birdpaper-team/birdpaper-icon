import type { App } from 'vue';
import _IconFThreeKey from './icon-f-three-key.vue';

const IconFThreeKey = Object.assign(_IconFThreeKey, {
  install: (app: App) => {
    app.component(_IconFThreeKey.name, _IconFThreeKey);
  }
});

export default IconFThreeKey;