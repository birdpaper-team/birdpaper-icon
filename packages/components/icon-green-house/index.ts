import type { App } from 'vue';
import _IconGreenHouse from './icon-green-house.vue';

const IconGreenHouse = Object.assign(_IconGreenHouse, {
  install: (app: App) => {
    app.component(_IconGreenHouse.name, _IconGreenHouse);
  }
});

export default IconGreenHouse;