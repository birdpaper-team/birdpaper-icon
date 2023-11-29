import type { App } from 'vue';
import _IconPieChartLine from './icon-pie-chart-line.vue';

const IconPieChartLine = Object.assign(_IconPieChartLine, {
  install: (app: App) => {
    app.component(_IconPieChartLine.name, _IconPieChartLine);
  }
});

export default IconPieChartLine;