import type { App } from 'vue';
import _IconTwoKey from './icon-two-key.vue';

const IconTwoKey = Object.assign(_IconTwoKey, {
  install: (app: App) => {
    app.component(_IconTwoKey.name, _IconTwoKey);
  }
});

export default IconTwoKey;