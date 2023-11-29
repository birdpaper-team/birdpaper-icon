import type { App } from 'vue';
import _IconHomeGearLine from './icon-home-gear-line.vue';

const IconHomeGearLine = Object.assign(_IconHomeGearLine, {
  install: (app: App) => {
    app.component(_IconHomeGearLine.name, _IconHomeGearLine);
  }
});

export default IconHomeGearLine;