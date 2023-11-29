import type { App } from 'vue';
import _IconBattery2Fill from './icon-battery-2-fill.vue';

const IconBattery2Fill = Object.assign(_IconBattery2Fill, {
  install: (app: App) => {
    app.component(_IconBattery2Fill.name, _IconBattery2Fill);
  }
});

export default IconBattery2Fill;