import type { App } from 'vue';
import _IconDrumstick from './icon-drumstick.vue';

const IconDrumstick = Object.assign(_IconDrumstick, {
  install: (app: App) => {
    app.component(_IconDrumstick.name, _IconDrumstick);
  }
});

export default IconDrumstick;