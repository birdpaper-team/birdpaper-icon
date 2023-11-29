import type { App } from 'vue';
import _IconAirplayFill from './icon-airplay-fill.vue';

const IconAirplayFill = Object.assign(_IconAirplayFill, {
  install: (app: App) => {
    app.component(_IconAirplayFill.name, _IconAirplayFill);
  }
});

export default IconAirplayFill;