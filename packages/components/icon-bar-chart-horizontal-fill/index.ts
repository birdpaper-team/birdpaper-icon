import type { App } from 'vue';
import _IconBarChartHorizontalFill from './icon-bar-chart-horizontal-fill.vue';

const IconBarChartHorizontalFill = Object.assign(_IconBarChartHorizontalFill, {
  install: (app: App) => {
    app.component(_IconBarChartHorizontalFill.name, _IconBarChartHorizontalFill);
  }
});

export default IconBarChartHorizontalFill;