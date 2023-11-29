import type { App } from 'vue';
import _IconMemoriesLine from './icon-memories-line.vue';

const IconMemoriesLine = Object.assign(_IconMemoriesLine, {
  install: (app: App) => {
    app.component(_IconMemoriesLine.name, _IconMemoriesLine);
  }
});

export default IconMemoriesLine;