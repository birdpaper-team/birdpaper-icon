import type { App } from 'vue';
import _IconSeedling from './icon-seedling.vue';

const IconSeedling = Object.assign(_IconSeedling, {
  install: (app: App) => {
    app.component(_IconSeedling.name, _IconSeedling);
  }
});

export default IconSeedling;