import type { App } from 'vue';
import _IconConnectionPoint from './icon-connection-point.vue';

const IconConnectionPoint = Object.assign(_IconConnectionPoint, {
  install: (app: App) => {
    app.component(_IconConnectionPoint.name, _IconConnectionPoint);
  }
});

export default IconConnectionPoint;