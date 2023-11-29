import type { App } from 'vue';
import _IconOilLine from './icon-oil-line.vue';

const IconOilLine = Object.assign(_IconOilLine, {
  install: (app: App) => {
    app.component(_IconOilLine.name, _IconOilLine);
  }
});

export default IconOilLine;