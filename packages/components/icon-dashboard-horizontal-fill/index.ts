import type { App } from 'vue';
import _IconDashboardHorizontalFill from './icon-dashboard-horizontal-fill.vue';

const IconDashboardHorizontalFill = Object.assign(_IconDashboardHorizontalFill, {
  install: (app: App) => {
    app.component(_IconDashboardHorizontalFill.name, _IconDashboardHorizontalFill);
  }
});

export default IconDashboardHorizontalFill;