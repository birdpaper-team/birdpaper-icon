import type { App } from 'vue';
import _IconDatabasePower from './icon-database-power.vue';

const IconDatabasePower = Object.assign(_IconDatabasePower, {
  install: (app: App) => {
    app.component(_IconDatabasePower.name, _IconDatabasePower);
  }
});

export default IconDatabasePower;