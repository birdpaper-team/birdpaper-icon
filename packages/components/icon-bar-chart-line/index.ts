import type { App } from 'vue';
import _IconBarChartLine from './icon-bar-chart-line.vue';

const IconBarChartLine = Object.assign(_IconBarChartLine, {
  install: (app: App) => {
    app.component(_IconBarChartLine.name, _IconBarChartLine);
  }
});

export default IconBarChartLine;