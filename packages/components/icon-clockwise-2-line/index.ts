import type { App } from 'vue';
import _IconClockwise2Line from './icon-clockwise-2-line.vue';

const IconClockwise2Line = Object.assign(_IconClockwise2Line, {
  install: (app: App) => {
    app.component(_IconClockwise2Line.name, _IconClockwise2Line);
  }
});

export default IconClockwise2Line;