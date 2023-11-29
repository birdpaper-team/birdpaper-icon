import type { App } from 'vue';
import _IconArmchairFill from './icon-armchair-fill.vue';

const IconArmchairFill = Object.assign(_IconArmchairFill, {
  install: (app: App) => {
    app.component(_IconArmchairFill.name, _IconArmchairFill);
  }
});

export default IconArmchairFill;