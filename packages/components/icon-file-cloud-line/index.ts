import type { App } from 'vue';
import _IconFileCloudLine from './icon-file-cloud-line.vue';

const IconFileCloudLine = Object.assign(_IconFileCloudLine, {
  install: (app: App) => {
    app.component(_IconFileCloudLine.name, _IconFileCloudLine);
  }
});

export default IconFileCloudLine;