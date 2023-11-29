import type { App } from 'vue';
import _IconDatabaseSuccess from './icon-database-success.vue';

const IconDatabaseSuccess = Object.assign(_IconDatabaseSuccess, {
  install: (app: App) => {
    app.component(_IconDatabaseSuccess.name, _IconDatabaseSuccess);
  }
});

export default IconDatabaseSuccess;