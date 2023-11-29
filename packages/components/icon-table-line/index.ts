import type { App } from 'vue';
import _IconTableLine from './icon-table-line.vue';

const IconTableLine = Object.assign(_IconTableLine, {
  install: (app: App) => {
    app.component(_IconTableLine.name, _IconTableLine);
  }
});

export default IconTableLine;