import type { App } from 'vue';
import _IconDatabaseDownload from './icon-database-download.vue';

const IconDatabaseDownload = Object.assign(_IconDatabaseDownload, {
  install: (app: App) => {
    app.component(_IconDatabaseDownload.name, _IconDatabaseDownload);
  }
});

export default IconDatabaseDownload;