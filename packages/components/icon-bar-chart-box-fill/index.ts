import type { App } from 'vue';
import _IconBarChartBoxFill from './icon-bar-chart-box-fill.vue';

const IconBarChartBoxFill = Object.assign(_IconBarChartBoxFill, {
  install: (app: App) => {
    app.component(_IconBarChartBoxFill.name, _IconBarChartBoxFill);
  }
});

export default IconBarChartBoxFill;