import type { App } from 'vue';
import _IconBarChartGroupedFill from './icon-bar-chart-grouped-fill.vue';

const IconBarChartGroupedFill = Object.assign(_IconBarChartGroupedFill, {
  install: (app: App) => {
    app.component(_IconBarChartGroupedFill.name, _IconBarChartGroupedFill);
  }
});

export default IconBarChartGroupedFill;