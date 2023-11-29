import type { App } from 'vue';
import _IconSeedlingFill from './icon-seedling-fill.vue';

const IconSeedlingFill = Object.assign(_IconSeedlingFill, {
  install: (app: App) => {
    app.component(_IconSeedlingFill.name, _IconSeedlingFill);
  }
});

export default IconSeedlingFill;