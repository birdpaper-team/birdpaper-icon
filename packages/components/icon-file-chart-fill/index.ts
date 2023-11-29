import type { App } from 'vue';
import _IconFileChartFill from './icon-file-chart-fill.vue';

const IconFileChartFill = Object.assign(_IconFileChartFill, {
  install: (app: App) => {
    app.component(_IconFileChartFill.name, _IconFileChartFill);
  }
});

export default IconFileChartFill;