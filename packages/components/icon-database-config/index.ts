import type { App } from 'vue';
import _IconDatabaseConfig from './icon-database-config.vue';

const IconDatabaseConfig = Object.assign(_IconDatabaseConfig, {
  install: (app: App) => {
    app.component(_IconDatabaseConfig.name, _IconDatabaseConfig);
  }
});

export default IconDatabaseConfig;