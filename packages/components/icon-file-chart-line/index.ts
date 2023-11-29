import type { App } from 'vue';
import _IconFileChartLine from './icon-file-chart-line.vue';

const IconFileChartLine = Object.assign(_IconFileChartLine, {
  install: (app: App) => {
    app.component(_IconFileChartLine.name, _IconFileChartLine);
  }
});

export default IconFileChartLine;