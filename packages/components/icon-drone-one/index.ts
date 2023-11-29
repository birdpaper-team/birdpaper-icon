import type { App } from 'vue';
import _IconDroneOne from './icon-drone-one.vue';

const IconDroneOne = Object.assign(_IconDroneOne, {
  install: (app: App) => {
    app.component(_IconDroneOne.name, _IconDroneOne);
  }
});

export default IconDroneOne;