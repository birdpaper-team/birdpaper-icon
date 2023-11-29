import type { App } from 'vue';
import _IconCook from './icon-cook.vue';

const IconCook = Object.assign(_IconCook, {
  install: (app: App) => {
    app.component(_IconCook.name, _IconCook);
  }
});

export default IconCook;