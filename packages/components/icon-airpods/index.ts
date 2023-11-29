import type { App } from 'vue';
import _IconAirpods from './icon-airpods.vue';

const IconAirpods = Object.assign(_IconAirpods, {
  install: (app: App) => {
    app.component(_IconAirpods.name, _IconAirpods);
  }
});

export default IconAirpods;