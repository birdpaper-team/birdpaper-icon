import type { App } from 'vue';
import _IconDatabaseLock from './icon-database-lock.vue';

const IconDatabaseLock = Object.assign(_IconDatabaseLock, {
  install: (app: App) => {
    app.component(_IconDatabaseLock.name, _IconDatabaseLock);
  }
});

export default IconDatabaseLock;