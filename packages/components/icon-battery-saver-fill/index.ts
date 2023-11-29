import type { App } from 'vue';
import _IconBatterySaverFill from './icon-battery-saver-fill.vue';

const IconBatterySaverFill = Object.assign(_IconBatterySaverFill, {
  install: (app: App) => {
    app.component(_IconBatterySaverFill.name, _IconBatterySaverFill);
  }
});

export default IconBatterySaverFill;