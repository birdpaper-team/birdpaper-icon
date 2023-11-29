import type { App } from 'vue';
import _IconDatabaseFail from './icon-database-fail.vue';

const IconDatabaseFail = Object.assign(_IconDatabaseFail, {
  install: (app: App) => {
    app.component(_IconDatabaseFail.name, _IconDatabaseFail);
  }
});

export default IconDatabaseFail;