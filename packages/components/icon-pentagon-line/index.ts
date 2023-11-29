import type { App } from 'vue';
import _IconPentagonLine from './icon-pentagon-line.vue';

const IconPentagonLine = Object.assign(_IconPentagonLine, {
  install: (app: App) => {
    app.component(_IconPentagonLine.name, _IconPentagonLine);
  }
});

export default IconPentagonLine;