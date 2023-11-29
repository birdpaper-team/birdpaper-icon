import type { App } from 'vue';
import _IconDatabaseFirst from './icon-database-first.vue';

const IconDatabaseFirst = Object.assign(_IconDatabaseFirst, {
  install: (app: App) => {
    app.component(_IconDatabaseFirst.name, _IconDatabaseFirst);
  }
});

export default IconDatabaseFirst;