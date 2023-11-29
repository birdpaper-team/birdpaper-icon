import type { App } from 'vue';
import _IconPinDistanceLine from './icon-pin-distance-line.vue';

const IconPinDistanceLine = Object.assign(_IconPinDistanceLine, {
  install: (app: App) => {
    app.component(_IconPinDistanceLine.name, _IconPinDistanceLine);
  }
});

export default IconPinDistanceLine;