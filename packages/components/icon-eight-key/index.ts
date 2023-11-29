import type { App } from 'vue';
import _IconEightKey from './icon-eight-key.vue';

const IconEightKey = Object.assign(_IconEightKey, {
  install: (app: App) => {
    app.component(_IconEightKey.name, _IconEightKey);
  }
});

export default IconEightKey;