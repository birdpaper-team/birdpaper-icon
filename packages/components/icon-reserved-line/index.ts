import type { App } from 'vue';
import _IconReservedLine from './icon-reserved-line.vue';

const IconReservedLine = Object.assign(_IconReservedLine, {
  install: (app: App) => {
    app.component(_IconReservedLine.name, _IconReservedLine);
  }
});

export default IconReservedLine;