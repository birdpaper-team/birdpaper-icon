import type { App } from 'vue';
import _IconDoorLine from './icon-door-line.vue';

const IconDoorLine = Object.assign(_IconDoorLine, {
  install: (app: App) => {
    app.component(_IconDoorLine.name, _IconDoorLine);
  }
});

export default IconDoorLine;