import type { App } from 'vue';
import _IconDashboardFill from './icon-dashboard-fill.vue';

const IconDashboardFill = Object.assign(_IconDashboardFill, {
  install: (app: App) => {
    app.component(_IconDashboardFill.name, _IconDashboardFill);
  }
});

export default IconDashboardFill;