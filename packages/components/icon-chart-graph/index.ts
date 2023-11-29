import type { App } from 'vue';
import _IconChartGraph from './icon-chart-graph.vue';

const IconChartGraph = Object.assign(_IconChartGraph, {
  install: (app: App) => {
    app.component(_IconChartGraph.name, _IconChartGraph);
  }
});

export default IconChartGraph;