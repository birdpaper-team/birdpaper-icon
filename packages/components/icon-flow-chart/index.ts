import type { App } from 'vue';
import _IconFlowChart from './icon-flow-chart.vue';

const IconFlowChart = Object.assign(_IconFlowChart, {
  install: (app: App) => {
    app.component(_IconFlowChart.name, _IconFlowChart);
  }
});

export default IconFlowChart;