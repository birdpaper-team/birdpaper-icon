import type { App } from 'vue';
import _IconDatabaseTime from './icon-database-time.vue';

const IconDatabaseTime = Object.assign(_IconDatabaseTime, {
  install: (app: App) => {
    app.component(_IconDatabaseTime.name, _IconDatabaseTime);
  }
});

export default IconDatabaseTime;