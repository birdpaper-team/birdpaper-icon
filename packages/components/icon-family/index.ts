import type { App } from 'vue';
import _IconFamily from './icon-family.vue';

const IconFamily = Object.assign(_IconFamily, {
  install: (app: App) => {
    app.component(_IconFamily.name, _IconFamily);
  }
});

export default IconFamily;