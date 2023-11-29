import type { App } from 'vue';
import _IconInstanceLine from './icon-instance-line.vue';

const IconInstanceLine = Object.assign(_IconInstanceLine, {
  install: (app: App) => {
    app.component(_IconInstanceLine.name, _IconInstanceLine);
  }
});

export default IconInstanceLine;