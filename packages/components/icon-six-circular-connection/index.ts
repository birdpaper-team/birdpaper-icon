import type { App } from 'vue';
import _IconSixCircularConnection from './icon-six-circular-connection.vue';

const IconSixCircularConnection = Object.assign(_IconSixCircularConnection, {
  install: (app: App) => {
    app.component(_IconSixCircularConnection.name, _IconSixCircularConnection);
  }
});

export default IconSixCircularConnection;