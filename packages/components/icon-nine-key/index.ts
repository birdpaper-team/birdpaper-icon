import type { App } from 'vue';
import _IconNineKey from './icon-nine-key.vue';

const IconNineKey = Object.assign(_IconNineKey, {
  install: (app: App) => {
    app.component(_IconNineKey.name, _IconNineKey);
  }
});

export default IconNineKey;