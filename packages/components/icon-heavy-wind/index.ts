import type { App } from 'vue';
import _IconHeavyWind from './icon-heavy-wind.vue';

const IconHeavyWind = Object.assign(_IconHeavyWind, {
  install: (app: App) => {
    app.component(_IconHeavyWind.name, _IconHeavyWind);
  }
});

export default IconHeavyWind;