import type { App } from 'vue';
import _IconBubbleChart from './icon-bubble-chart.vue';

const IconBubbleChart = Object.assign(_IconBubbleChart, {
  install: (app: App) => {
    app.component(_IconBubbleChart.name, _IconBubbleChart);
  }
});

export default IconBubbleChart;