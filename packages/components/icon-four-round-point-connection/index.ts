import type { App } from 'vue';
import _IconFourRoundPointConnection from './icon-four-round-point-connection.vue';

const IconFourRoundPointConnection = Object.assign(_IconFourRoundPointConnection, {
  install: (app: App) => {
    app.component(_IconFourRoundPointConnection.name, _IconFourRoundPointConnection);
  }
});

export default IconFourRoundPointConnection;