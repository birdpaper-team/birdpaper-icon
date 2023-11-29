import type { App } from 'vue';
import _IconMapPinAddLine from './icon-map-pin-add-line.vue';

const IconMapPinAddLine = Object.assign(_IconMapPinAddLine, {
  install: (app: App) => {
    app.component(_IconMapPinAddLine.name, _IconMapPinAddLine);
  }
});

export default IconMapPinAddLine;