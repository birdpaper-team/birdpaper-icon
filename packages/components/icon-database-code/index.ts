import type { App } from 'vue';
import _IconDatabaseCode from './icon-database-code.vue';

const IconDatabaseCode = Object.assign(_IconDatabaseCode, {
  install: (app: App) => {
    app.component(_IconDatabaseCode.name, _IconDatabaseCode);
  }
});

export default IconDatabaseCode;