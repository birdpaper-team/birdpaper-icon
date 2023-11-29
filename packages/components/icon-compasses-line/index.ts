import type { App } from 'vue';
import _IconCompassesLine from './icon-compasses-line.vue';

const IconCompassesLine = Object.assign(_IconCompassesLine, {
  install: (app: App) => {
    app.component(_IconCompassesLine.name, _IconCompassesLine);
  }
});

export default IconCompassesLine;