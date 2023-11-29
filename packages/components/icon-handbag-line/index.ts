import type { App } from 'vue';
import _IconHandbagLine from './icon-handbag-line.vue';

const IconHandbagLine = Object.assign(_IconHandbagLine, {
  install: (app: App) => {
    app.component(_IconHandbagLine.name, _IconHandbagLine);
  }
});

export default IconHandbagLine;