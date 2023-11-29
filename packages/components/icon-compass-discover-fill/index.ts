import type { App } from 'vue';
import _IconCompassDiscoverFill from './icon-compass-discover-fill.vue';

const IconCompassDiscoverFill = Object.assign(_IconCompassDiscoverFill, {
  install: (app: App) => {
    app.component(_IconCompassDiscoverFill.name, _IconCompassDiscoverFill);
  }
});

export default IconCompassDiscoverFill;