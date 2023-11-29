import type { App } from 'vue';
import _IconMonitorOne from './icon-monitor-one.vue';

const IconMonitorOne = Object.assign(_IconMonitorOne, {
  install: (app: App) => {
    app.component(_IconMonitorOne.name, _IconMonitorOne);
  }
});

export default IconMonitorOne;