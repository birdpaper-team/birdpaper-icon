import type { App } from 'vue';
import _IconClockwiseFill from './icon-clockwise-fill.vue';

const IconClockwiseFill = Object.assign(_IconClockwiseFill, {
  install: (app: App) => {
    app.component(_IconClockwiseFill.name, _IconClockwiseFill);
  }
});

export default IconClockwiseFill;