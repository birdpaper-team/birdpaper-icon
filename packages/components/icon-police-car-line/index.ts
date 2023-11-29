import type { App } from 'vue';
import _IconPoliceCarLine from './icon-police-car-line.vue';

const IconPoliceCarLine = Object.assign(_IconPoliceCarLine, {
  install: (app: App) => {
    app.component(_IconPoliceCarLine.name, _IconPoliceCarLine);
  }
});

export default IconPoliceCarLine;