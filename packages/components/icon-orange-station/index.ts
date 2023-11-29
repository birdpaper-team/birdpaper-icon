import type { App } from 'vue';
import _IconOrangeStation from './icon-orange-station.vue';

const IconOrangeStation = Object.assign(_IconOrangeStation, {
  install: (app: App) => {
    app.component(_IconOrangeStation.name, _IconOrangeStation);
  }
});

export default IconOrangeStation;