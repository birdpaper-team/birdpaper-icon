import type { App } from 'vue';
import _IconHourglass2Line from './icon-hourglass-2-line.vue';

const IconHourglass2Line = Object.assign(_IconHourglass2Line, {
  install: (app: App) => {
    app.component(_IconHourglass2Line.name, _IconHourglass2Line);
  }
});

export default IconHourglass2Line;