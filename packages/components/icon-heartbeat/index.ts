import type { App } from 'vue';
import _IconHeartbeat from './icon-heartbeat.vue';

const IconHeartbeat = Object.assign(_IconHeartbeat, {
  install: (app: App) => {
    app.component(_IconHeartbeat.name, _IconHeartbeat);
  }
});

export default IconHeartbeat;