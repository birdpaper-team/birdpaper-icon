import type { App } from 'vue';
import _IconMonitor from './icon-monitor.vue';

const IconMonitor = Object.assign(_IconMonitor, {
  install: (app: App) => {
    app.component(_IconMonitor.name, _IconMonitor);
  }
});

export default IconMonitor;