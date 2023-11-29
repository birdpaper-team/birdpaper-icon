import type { App } from 'vue';
import _IconLineChartFill from './icon-line-chart-fill.vue';

const IconLineChartFill = Object.assign(_IconLineChartFill, {
  install: (app: App) => {
    app.component(_IconLineChartFill.name, _IconLineChartFill);
  }
});

export default IconLineChartFill;