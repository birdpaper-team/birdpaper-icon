import type { App } from 'vue';
import _IconFlowerLine from './icon-flower-line.vue';

const IconFlowerLine = Object.assign(_IconFlowerLine, {
  install: (app: App) => {
    app.component(_IconFlowerLine.name, _IconFlowerLine);
  }
});

export default IconFlowerLine;