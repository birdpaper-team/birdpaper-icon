import type { App } from 'vue';
import _IconDownloadCloudLine from './icon-download-cloud-line.vue';

const IconDownloadCloudLine = Object.assign(_IconDownloadCloudLine, {
  install: (app: App) => {
    app.component(_IconDownloadCloudLine.name, _IconDownloadCloudLine);
  }
});

export default IconDownloadCloudLine;