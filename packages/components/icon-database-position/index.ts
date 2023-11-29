import type { App } from 'vue';
import _IconDatabasePosition from './icon-database-position.vue';

const IconDatabasePosition = Object.assign(_IconDatabasePosition, {
  install: (app: App) => {
    app.component(_IconDatabasePosition.name, _IconDatabasePosition);
  }
});

export default IconDatabasePosition;