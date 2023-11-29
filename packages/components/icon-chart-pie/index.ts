import type { App } from 'vue';
import _IconChartPie from './icon-chart-pie.vue';

const IconChartPie = Object.assign(_IconChartPie, {
  install: (app: App) => {
    app.component(_IconChartPie.name, _IconChartPie);
  }
});

export default IconChartPie;