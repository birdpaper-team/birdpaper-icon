import type { App } from 'vue';
import _IconColorFilterLine from './icon-color-filter-line.vue';

const IconColorFilterLine = Object.assign(_IconColorFilterLine, {
  install: (app: App) => {
    app.component(_IconColorFilterLine.name, _IconColorFilterLine);
  }
});

export default IconColorFilterLine;