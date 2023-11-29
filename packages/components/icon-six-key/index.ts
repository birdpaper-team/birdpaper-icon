import type { App } from 'vue';
import _IconSixKey from './icon-six-key.vue';

const IconSixKey = Object.assign(_IconSixKey, {
  install: (app: App) => {
    app.component(_IconSixKey.name, _IconSixKey);
  }
});

export default IconSixKey;