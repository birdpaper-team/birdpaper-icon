import type { App } from 'vue';
import _IconMapPinLine from './icon-map-pin-line.vue';

const IconMapPinLine = Object.assign(_IconMapPinLine, {
  install: (app: App) => {
    app.component(_IconMapPinLine.name, _IconMapPinLine);
  }
});

export default IconMapPinLine;