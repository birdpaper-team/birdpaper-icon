import type { App } from 'vue';
import _IconFolderChartFill from './icon-folder-chart-fill.vue';

const IconFolderChartFill = Object.assign(_IconFolderChartFill, {
  install: (app: App) => {
    app.component(_IconFolderChartFill.name, _IconFolderChartFill);
  }
});

export default IconFolderChartFill;