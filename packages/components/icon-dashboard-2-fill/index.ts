import type { App } from 'vue';
import _IconDashboard2Fill from './icon-dashboard-2-fill.vue';

const IconDashboard2Fill = Object.assign(_IconDashboard2Fill, {
  install: (app: App) => {
    app.component(_IconDashboard2Fill.name, _IconDashboard2Fill);
  }
});

export default IconDashboard2Fill;