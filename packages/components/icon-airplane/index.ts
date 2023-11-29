import type { App } from 'vue';
import _IconAirplane from './icon-airplane.vue';

const IconAirplane = Object.assign(_IconAirplane, {
  install: (app: App) => {
    app.component(_IconAirplane.name, _IconAirplane);
  }
});

export default IconAirplane;