import type { App } from 'vue';
import _IconPoint from './icon-point.vue';

const IconPoint = Object.assign(_IconPoint, {
  install: (app: App) => {
    app.component(_IconPoint.name, _IconPoint);
  }
});

export default IconPoint;