import type { App } from 'vue';
import _IconClockwiseLine from './icon-clockwise-line.vue';

const IconClockwiseLine = Object.assign(_IconClockwiseLine, {
  install: (app: App) => {
    app.component(_IconClockwiseLine.name, _IconClockwiseLine);
  }
});

export default IconClockwiseLine;