import type { App } from 'vue';
import _IconDashboardTwo from './icon-dashboard-two.vue';

const IconDashboardTwo = Object.assign(_IconDashboardTwo, {
  install: (app: App) => {
    app.component(_IconDashboardTwo.name, _IconDashboardTwo);
  }
});

export default IconDashboardTwo;