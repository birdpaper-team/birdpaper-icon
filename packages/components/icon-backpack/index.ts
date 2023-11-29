import type { App } from 'vue';
import _IconBackpack from './icon-backpack.vue';

const IconBackpack = Object.assign(_IconBackpack, {
  install: (app: App) => {
    app.component(_IconBackpack.name, _IconBackpack);
  }
});

export default IconBackpack;