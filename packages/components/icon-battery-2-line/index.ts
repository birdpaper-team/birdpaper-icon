import type { App } from 'vue';
import _IconBattery2Line from './icon-battery-2-line.vue';

const IconBattery2Line = Object.assign(_IconBattery2Line, {
  install: (app: App) => {
    app.component(_IconBattery2Line.name, _IconBattery2Line);
  }
});

export default IconBattery2Line;