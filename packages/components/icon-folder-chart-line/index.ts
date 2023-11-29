import type { App } from 'vue';
import _IconFolderChartLine from './icon-folder-chart-line.vue';

const IconFolderChartLine = Object.assign(_IconFolderChartLine, {
  install: (app: App) => {
    app.component(_IconFolderChartLine.name, _IconFolderChartLine);
  }
});

export default IconFolderChartLine;