import type { App } from 'vue';
import _IconCompassFill from './icon-compass-fill.vue';

const IconCompassFill = Object.assign(_IconCompassFill, {
  install: (app: App) => {
    app.component(_IconCompassFill.name, _IconCompassFill);
  }
});

export default IconCompassFill;