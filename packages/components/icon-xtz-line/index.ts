import type { App } from 'vue';
import _IconXtzLine from './icon-xtz-line.vue';

const IconXtzLine = Object.assign(_IconXtzLine, {
  install: (app: App) => {
    app.component(_IconXtzLine.name, _IconXtzLine);
  }
});

export default IconXtzLine;