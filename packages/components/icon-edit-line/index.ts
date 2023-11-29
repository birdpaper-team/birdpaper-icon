import type { App } from 'vue';
import _IconEditLine from './icon-edit-line.vue';

const IconEditLine = Object.assign(_IconEditLine, {
  install: (app: App) => {
    app.component(_IconEditLine.name, _IconEditLine);
  }
});

export default IconEditLine;