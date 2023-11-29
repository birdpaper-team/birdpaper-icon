import type { App } from 'vue';
import _IconLeafLine from './icon-leaf-line.vue';

const IconLeafLine = Object.assign(_IconLeafLine, {
  install: (app: App) => {
    app.component(_IconLeafLine.name, _IconLeafLine);
  }
});

export default IconLeafLine;