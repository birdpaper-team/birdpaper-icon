import type { App } from 'vue';
import _IconDatabaseNetworkPoint from './icon-database-network-point.vue';

const IconDatabaseNetworkPoint = Object.assign(_IconDatabaseNetworkPoint, {
  install: (app: App) => {
    app.component(_IconDatabaseNetworkPoint.name, _IconDatabaseNetworkPoint);
  }
});

export default IconDatabaseNetworkPoint;