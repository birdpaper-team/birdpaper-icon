import type { App } from 'vue';
import _IconDashboardCar from './icon-dashboard-car.vue';

const IconDashboardCar = Object.assign(_IconDashboardCar, {
  install: (app: App) => {
    app.component(_IconDashboardCar.name, _IconDashboardCar);
  }
});

export default IconDashboardCar;