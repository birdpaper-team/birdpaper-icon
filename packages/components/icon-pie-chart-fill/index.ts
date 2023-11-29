import type { App } from 'vue';
import _IconPieChartFill from './icon-pie-chart-fill.vue';

const IconPieChartFill = Object.assign(_IconPieChartFill, {
  install: (app: App) => {
    app.component(_IconPieChartFill.name, _IconPieChartFill);
  }
});

export default IconPieChartFill;