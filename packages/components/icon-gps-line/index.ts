import type { App } from 'vue';
import _IconGpsLine from './icon-gps-line.vue';

const IconGpsLine = Object.assign(_IconGpsLine, {
  install: (app: App) => {
    app.component(_IconGpsLine.name, _IconGpsLine);
  }
});

export default IconGpsLine;