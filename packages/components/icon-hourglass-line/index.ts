import type { App } from 'vue';
import _IconHourglassLine from './icon-hourglass-line.vue';

const IconHourglassLine = Object.assign(_IconHourglassLine, {
  install: (app: App) => {
    app.component(_IconHourglassLine.name, _IconHourglassLine);
  }
});

export default IconHourglassLine;