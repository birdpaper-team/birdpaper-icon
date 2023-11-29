import type { App } from 'vue';
import _IconChartHistogramTwo from './icon-chart-histogram-two.vue';

const IconChartHistogramTwo = Object.assign(_IconChartHistogramTwo, {
  install: (app: App) => {
    app.component(_IconChartHistogramTwo.name, _IconChartHistogramTwo);
  }
});

export default IconChartHistogramTwo;