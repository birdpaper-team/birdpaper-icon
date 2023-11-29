import type { App } from 'vue';
import _IconOctagonLine from './icon-octagon-line.vue';

const IconOctagonLine = Object.assign(_IconOctagonLine, {
  install: (app: App) => {
    app.component(_IconOctagonLine.name, _IconOctagonLine);
  }
});

export default IconOctagonLine;