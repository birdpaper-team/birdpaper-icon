import type { App } from 'vue';
import _IconArrowKeys from './icon-arrow-keys.vue';

const IconArrowKeys = Object.assign(_IconArrowKeys, {
  install: (app: App) => {
    app.component(_IconArrowKeys.name, _IconArrowKeys);
  }
});

export default IconArrowKeys;