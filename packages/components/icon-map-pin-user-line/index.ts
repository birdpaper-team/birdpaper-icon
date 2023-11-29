import type { App } from 'vue';
import _IconMapPinUserLine from './icon-map-pin-user-line.vue';

const IconMapPinUserLine = Object.assign(_IconMapPinUserLine, {
  install: (app: App) => {
    app.component(_IconMapPinUserLine.name, _IconMapPinUserLine);
  }
});

export default IconMapPinUserLine;