import type { App } from 'vue';
import _IconDatabaseAlert from './icon-database-alert.vue';

const IconDatabaseAlert = Object.assign(_IconDatabaseAlert, {
  install: (app: App) => {
    app.component(_IconDatabaseAlert.name, _IconDatabaseAlert);
  }
});

export default IconDatabaseAlert;