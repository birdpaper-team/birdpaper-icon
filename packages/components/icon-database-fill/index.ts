import type { App } from 'vue';
import _IconDatabaseFill from './icon-database-fill.vue';

const IconDatabaseFill = Object.assign(_IconDatabaseFill, {
  install: (app: App) => {
    app.component(_IconDatabaseFill.name, _IconDatabaseFill);
  }
});

export default IconDatabaseFill;