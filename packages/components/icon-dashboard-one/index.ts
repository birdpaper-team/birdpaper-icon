import type { App } from 'vue';
import _IconDashboardOne from './icon-dashboard-one.vue';

const IconDashboardOne = Object.assign(_IconDashboardOne, {
  install: (app: App) => {
    app.component(_IconDashboardOne.name, _IconDashboardOne);
  }
});

export default IconDashboardOne;