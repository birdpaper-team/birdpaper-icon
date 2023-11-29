import type { App } from 'vue';
import _IconDatabaseNetwork from './icon-database-network.vue';

const IconDatabaseNetwork = Object.assign(_IconDatabaseNetwork, {
  install: (app: App) => {
    app.component(_IconDatabaseNetwork.name, _IconDatabaseNetwork);
  }
});

export default IconDatabaseNetwork;