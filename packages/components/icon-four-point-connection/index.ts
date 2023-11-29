import type { App } from 'vue';
import _IconFourPointConnection from './icon-four-point-connection.vue';

const IconFourPointConnection = Object.assign(_IconFourPointConnection, {
  install: (app: App) => {
    app.component(_IconFourPointConnection.name, _IconFourPointConnection);
  }
});

export default IconFourPointConnection;