import type { App } from 'vue';
import _IconMapPinRangeLine from './icon-map-pin-range-line.vue';

const IconMapPinRangeLine = Object.assign(_IconMapPinRangeLine, {
  install: (app: App) => {
    app.component(_IconMapPinRangeLine.name, _IconMapPinRangeLine);
  }
});

export default IconMapPinRangeLine;