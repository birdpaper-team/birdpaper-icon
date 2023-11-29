import type { App } from 'vue';
import _IconBarChartGroupedLine from './icon-bar-chart-grouped-line.vue';

const IconBarChartGroupedLine = Object.assign(_IconBarChartGroupedLine, {
  install: (app: App) => {
    app.component(_IconBarChartGroupedLine.name, _IconBarChartGroupedLine);
  }
});

export default IconBarChartGroupedLine;