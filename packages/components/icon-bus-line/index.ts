import type { App } from 'vue';
import _IconBusLine from './icon-bus-line.vue';

const IconBusLine = Object.assign(_IconBusLine, {
  install: (app: App) => {
    app.component(_IconBusLine.name, _IconBusLine);
  }
});

export default IconBusLine;