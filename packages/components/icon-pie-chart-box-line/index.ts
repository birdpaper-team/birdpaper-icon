import type { App } from 'vue';
import _IconPieChartBoxLine from './icon-pie-chart-box-line.vue';

const IconPieChartBoxLine = Object.assign(_IconPieChartBoxLine, {
  install: (app: App) => {
    app.component(_IconPieChartBoxLine.name, _IconPieChartBoxLine);
  }
});

export default IconPieChartBoxLine;