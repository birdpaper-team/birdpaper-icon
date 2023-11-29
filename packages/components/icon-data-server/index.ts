import type { App } from 'vue';
import _IconDataServer from './icon-data-server.vue';

const IconDataServer = Object.assign(_IconDataServer, {
  install: (app: App) => {
    app.component(_IconDataServer.name, _IconDataServer);
  }
});

export default IconDataServer;