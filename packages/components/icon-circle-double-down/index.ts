import type { App } from 'vue';
import _IconCircleDoubleDown from './icon-circle-double-down.vue';

const IconCircleDoubleDown = Object.assign(_IconCircleDoubleDown, {
  install: (app: App) => {
    app.component(_IconCircleDoubleDown.name, _IconCircleDoubleDown);
  }
});

export default IconCircleDoubleDown;