import type { App } from 'vue';
import _IconDashboard3Fill from './icon-dashboard-3-fill.vue';

const IconDashboard3Fill = Object.assign(_IconDashboard3Fill, {
  install: (app: App) => {
    app.component(_IconDashboard3Fill.name, _IconDashboard3Fill);
  }
});

export default IconDashboard3Fill;