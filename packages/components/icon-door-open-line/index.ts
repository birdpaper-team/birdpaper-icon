import type { App } from 'vue';
import _IconDoorOpenLine from './icon-door-open-line.vue';

const IconDoorOpenLine = Object.assign(_IconDoorOpenLine, {
  install: (app: App) => {
    app.component(_IconDoorOpenLine.name, _IconDoorOpenLine);
  }
});

export default IconDoorOpenLine;