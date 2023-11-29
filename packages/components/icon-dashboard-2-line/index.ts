import type { App } from 'vue';
import _IconDashboard2Line from './icon-dashboard-2-line.vue';

const IconDashboard2Line = Object.assign(_IconDashboard2Line, {
  install: (app: App) => {
    app.component(_IconDashboard2Line.name, _IconDashboard2Line);
  }
});

export default IconDashboard2Line;