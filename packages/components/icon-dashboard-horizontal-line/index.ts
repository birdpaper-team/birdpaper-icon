import type { App } from 'vue';
import _IconDashboardHorizontalLine from './icon-dashboard-horizontal-line.vue';

const IconDashboardHorizontalLine = Object.assign(_IconDashboardHorizontalLine, {
  install: (app: App) => {
    app.component(_IconDashboardHorizontalLine.name, _IconDashboardHorizontalLine);
  }
});

export default IconDashboardHorizontalLine;