import type { App } from 'vue';
import _IconMonitorTwo from './icon-monitor-two.vue';

const IconMonitorTwo = Object.assign(_IconMonitorTwo, {
  install: (app: App) => {
    app.component(_IconMonitorTwo.name, _IconMonitorTwo);
  }
});

export default IconMonitorTwo;