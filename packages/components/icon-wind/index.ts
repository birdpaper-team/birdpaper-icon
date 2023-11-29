import type { App } from 'vue';
import _IconWind from './icon-wind.vue';

const IconWind = Object.assign(_IconWind, {
  install: (app: App) => {
    app.component(_IconWind.name, _IconWind);
  }
});

export default IconWind;