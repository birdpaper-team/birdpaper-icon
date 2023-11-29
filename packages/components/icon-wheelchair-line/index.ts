import type { App } from 'vue';
import _IconWheelchairLine from './icon-wheelchair-line.vue';

const IconWheelchairLine = Object.assign(_IconWheelchairLine, {
  install: (app: App) => {
    app.component(_IconWheelchairLine.name, _IconWheelchairLine);
  }
});

export default IconWheelchairLine;