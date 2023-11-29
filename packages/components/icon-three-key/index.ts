import type { App } from 'vue';
import _IconThreeKey from './icon-three-key.vue';

const IconThreeKey = Object.assign(_IconThreeKey, {
  install: (app: App) => {
    app.component(_IconThreeKey.name, _IconThreeKey);
  }
});

export default IconThreeKey;