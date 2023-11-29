import type { App } from 'vue';
import _IconDashboard from './icon-dashboard.vue';

const IconDashboard = Object.assign(_IconDashboard, {
  install: (app: App) => {
    app.component(_IconDashboard.name, _IconDashboard);
  }
});

export default IconDashboard;