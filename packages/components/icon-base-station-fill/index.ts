import type { App } from 'vue';
import _IconBaseStationFill from './icon-base-station-fill.vue';

const IconBaseStationFill = Object.assign(_IconBaseStationFill, {
  install: (app: App) => {
    app.component(_IconBaseStationFill.name, _IconBaseStationFill);
  }
});

export default IconBaseStationFill;