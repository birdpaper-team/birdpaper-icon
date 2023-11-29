import type { App } from 'vue';
import _IconDatabasePoint from './icon-database-point.vue';

const IconDatabasePoint = Object.assign(_IconDatabasePoint, {
  install: (app: App) => {
    app.component(_IconDatabasePoint.name, _IconDatabasePoint);
  }
});

export default IconDatabasePoint;