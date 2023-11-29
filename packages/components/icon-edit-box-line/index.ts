import type { App } from 'vue';
import _IconEditBoxLine from './icon-edit-box-line.vue';

const IconEditBoxLine = Object.assign(_IconEditBoxLine, {
  install: (app: App) => {
    app.component(_IconEditBoxLine.name, _IconEditBoxLine);
  }
});

export default IconEditBoxLine;