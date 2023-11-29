import type { App } from 'vue';
import _IconMapLine from './icon-map-line.vue';

const IconMapLine = Object.assign(_IconMapLine, {
  install: (app: App) => {
    app.component(_IconMapLine.name, _IconMapLine);
  }
});

export default IconMapLine;