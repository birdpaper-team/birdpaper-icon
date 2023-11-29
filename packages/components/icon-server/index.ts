import type { App } from 'vue';
import _IconServer from './icon-server.vue';

const IconServer = Object.assign(_IconServer, {
  install: (app: App) => {
    app.component(_IconServer.name, _IconServer);
  }
});

export default IconServer;