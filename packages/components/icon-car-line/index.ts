import type { App } from 'vue';
import _IconCarLine from './icon-car-line.vue';

const IconCarLine = Object.assign(_IconCarLine, {
  install: (app: App) => {
    app.component(_IconCarLine.name, _IconCarLine);
  }
});

export default IconCarLine;