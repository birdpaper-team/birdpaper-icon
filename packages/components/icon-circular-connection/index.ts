import type { App } from 'vue';
import _IconCircularConnection from './icon-circular-connection.vue';

const IconCircularConnection = Object.assign(_IconCircularConnection, {
  install: (app: App) => {
    app.component(_IconCircularConnection.name, _IconCircularConnection);
  }
});

export default IconCircularConnection;