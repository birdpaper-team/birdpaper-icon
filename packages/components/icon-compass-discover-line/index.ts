import type { App } from 'vue';
import _IconCompassDiscoverLine from './icon-compass-discover-line.vue';

const IconCompassDiscoverLine = Object.assign(_IconCompassDiscoverLine, {
  install: (app: App) => {
    app.component(_IconCompassDiscoverLine.name, _IconCompassDiscoverLine);
  }
});

export default IconCompassDiscoverLine;