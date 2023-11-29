import type { App } from 'vue';
import _IconBarChartFill from './icon-bar-chart-fill.vue';

const IconBarChartFill = Object.assign(_IconBarChartFill, {
  install: (app: App) => {
    app.component(_IconBarChartFill.name, _IconBarChartFill);
  }
});

export default IconBarChartFill;