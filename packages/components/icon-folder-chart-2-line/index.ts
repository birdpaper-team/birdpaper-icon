import type { App } from 'vue';
import _IconFolderChart2Line from './icon-folder-chart-2-line.vue';

const IconFolderChart2Line = Object.assign(_IconFolderChart2Line, {
  install: (app: App) => {
    app.component(_IconFolderChart2Line.name, _IconFolderChart2Line);
  }
});

export default IconFolderChart2Line;