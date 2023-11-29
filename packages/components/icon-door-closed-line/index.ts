import type { App } from 'vue';
import _IconDoorClosedLine from './icon-door-closed-line.vue';

const IconDoorClosedLine = Object.assign(_IconDoorClosedLine, {
  install: (app: App) => {
    app.component(_IconDoorClosedLine.name, _IconDoorClosedLine);
  }
});

export default IconDoorClosedLine;