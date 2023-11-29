import type { App } from 'vue';
import _IconTShirtAirLine from './icon-t-shirt-air-line.vue';

const IconTShirtAirLine = Object.assign(_IconTShirtAirLine, {
  install: (app: App) => {
    app.component(_IconTShirtAirLine.name, _IconTShirtAirLine);
  }
});

export default IconTShirtAirLine;