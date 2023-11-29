import type { App } from 'vue';
import _IconDashboard3Line from './icon-dashboard-3-line.vue';

const IconDashboard3Line = Object.assign(_IconDashboard3Line, {
  install: (app: App) => {
    app.component(_IconDashboard3Line.name, _IconDashboard3Line);
  }
});

export default IconDashboard3Line;