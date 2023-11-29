import type { App } from 'vue';
import _IconCoordinateSystem from './icon-coordinate-system.vue';

const IconCoordinateSystem = Object.assign(_IconCoordinateSystem, {
  install: (app: App) => {
    app.component(_IconCoordinateSystem.name, _IconCoordinateSystem);
  }
});

export default IconCoordinateSystem;