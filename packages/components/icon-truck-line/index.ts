import type { App } from 'vue';
import _IconTruckLine from './icon-truck-line.vue';

const IconTruckLine = Object.assign(_IconTruckLine, {
  install: (app: App) => {
    app.component(_IconTruckLine.name, _IconTruckLine);
  }
});

export default IconTruckLine;