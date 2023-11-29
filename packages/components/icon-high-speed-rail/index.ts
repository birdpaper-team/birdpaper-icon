import type { App } from 'vue';
import _IconHighSpeedRail from './icon-high-speed-rail.vue';

const IconHighSpeedRail = Object.assign(_IconHighSpeedRail, {
  install: (app: App) => {
    app.component(_IconHighSpeedRail.name, _IconHighSpeedRail);
  }
});

export default IconHighSpeedRail;