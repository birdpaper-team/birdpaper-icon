import type { App } from 'vue';
import _IconChartHistogram from './icon-chart-histogram.vue';

const IconChartHistogram = Object.assign(_IconChartHistogram, {
  install: (app: App) => {
    app.component(_IconChartHistogram.name, _IconChartHistogram);
  }
});

export default IconChartHistogram;