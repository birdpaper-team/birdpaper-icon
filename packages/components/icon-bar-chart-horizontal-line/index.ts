import type { App } from 'vue';
import _IconBarChartHorizontalLine from './icon-bar-chart-horizontal-line.vue';

const IconBarChartHorizontalLine = Object.assign(_IconBarChartHorizontalLine, {
  install: (app: App) => {
    app.component(_IconBarChartHorizontalLine.name, _IconBarChartHorizontalLine);
  }
});

export default IconBarChartHorizontalLine;