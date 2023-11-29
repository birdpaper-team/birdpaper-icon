import type { App } from 'vue';
import _IconVkFill from './icon-vk-fill.vue';

const IconVkFill = Object.assign(_IconVkFill, {
  install: (app: App) => {
    app.component(_IconVkFill.name, _IconVkFill);
  }
});

export default IconVkFill;