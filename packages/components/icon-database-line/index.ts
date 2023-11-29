import type { App } from 'vue';
import _IconDatabaseLine from './icon-database-line.vue';

const IconDatabaseLine = Object.assign(_IconDatabaseLine, {
  install: (app: App) => {
    app.component(_IconDatabaseLine.name, _IconDatabaseLine);
  }
});

export default IconDatabaseLine;