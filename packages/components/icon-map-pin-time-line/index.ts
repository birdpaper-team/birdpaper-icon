import type { App } from 'vue';
import _IconMapPinTimeLine from './icon-map-pin-time-line.vue';

const IconMapPinTimeLine = Object.assign(_IconMapPinTimeLine, {
  install: (app: App) => {
    app.component(_IconMapPinTimeLine.name, _IconMapPinTimeLine);
  }
});

export default IconMapPinTimeLine;