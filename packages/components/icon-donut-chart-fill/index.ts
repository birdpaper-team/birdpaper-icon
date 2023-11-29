import type { App } from 'vue';
import _IconDonutChartFill from './icon-donut-chart-fill.vue';

const IconDonutChartFill = Object.assign(_IconDonutChartFill, {
  install: (app: App) => {
    app.component(_IconDonutChartFill.name, _IconDonutChartFill);
  }
});

export default IconDonutChartFill;