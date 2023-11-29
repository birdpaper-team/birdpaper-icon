import type { App } from 'vue';
import _IconTableAltLine from './icon-table-alt-line.vue';

const IconTableAltLine = Object.assign(_IconTableAltLine, {
  install: (app: App) => {
    app.component(_IconTableAltLine.name, _IconTableAltLine);
  }
});

export default IconTableAltLine;