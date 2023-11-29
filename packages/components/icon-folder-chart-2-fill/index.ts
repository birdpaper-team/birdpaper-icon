import type { App } from 'vue';
import _IconFolderChart2Fill from './icon-folder-chart-2-fill.vue';

const IconFolderChart2Fill = Object.assign(_IconFolderChart2Fill, {
  install: (app: App) => {
    app.component(_IconFolderChart2Fill.name, _IconFolderChart2Fill);
  }
});

export default IconFolderChart2Fill;