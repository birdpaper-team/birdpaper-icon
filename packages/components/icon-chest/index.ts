import type { App } from 'vue';
import _IconChest from './icon-chest.vue';

const IconChest = Object.assign(_IconChest, {
  install: (app: App) => {
    app.component(_IconChest.name, _IconChest);
  }
});

export default IconChest;