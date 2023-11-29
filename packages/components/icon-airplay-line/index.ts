import type { App } from 'vue';
import _IconAirplayLine from './icon-airplay-line.vue';

const IconAirplayLine = Object.assign(_IconAirplayLine, {
  install: (app: App) => {
    app.component(_IconAirplayLine.name, _IconAirplayLine);
  }
});

export default IconAirplayLine;