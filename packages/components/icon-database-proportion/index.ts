import type { App } from 'vue';
import _IconDatabaseProportion from './icon-database-proportion.vue';

const IconDatabaseProportion = Object.assign(_IconDatabaseProportion, {
  install: (app: App) => {
    app.component(_IconDatabaseProportion.name, _IconDatabaseProportion);
  }
});

export default IconDatabaseProportion;