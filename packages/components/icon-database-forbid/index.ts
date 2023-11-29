import type { App } from 'vue';
import _IconDatabaseForbid from './icon-database-forbid.vue';

const IconDatabaseForbid = Object.assign(_IconDatabaseForbid, {
  install: (app: App) => {
    app.component(_IconDatabaseForbid.name, _IconDatabaseForbid);
  }
});

export default IconDatabaseForbid;