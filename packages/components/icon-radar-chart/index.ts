import type { App } from 'vue';
import _IconRadarChart from './icon-radar-chart.vue';

const IconRadarChart = Object.assign(_IconRadarChart, {
  install: (app: App) => {
    app.component(_IconRadarChart.name, _IconRadarChart);
  }
});

export default IconRadarChart;