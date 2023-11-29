import type { App } from 'vue';
import _IconPieChartBoxFill from './icon-pie-chart-box-fill.vue';

const IconPieChartBoxFill = Object.assign(_IconPieChartBoxFill, {
  install: (app: App) => {
    app.component(_IconPieChartBoxFill.name, _IconPieChartBoxFill);
  }
});

export default IconPieChartBoxFill;