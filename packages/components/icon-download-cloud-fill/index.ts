import type { App } from 'vue';
import _IconDownloadCloudFill from './icon-download-cloud-fill.vue';

const IconDownloadCloudFill = Object.assign(_IconDownloadCloudFill, {
  install: (app: App) => {
    app.component(_IconDownloadCloudFill.name, _IconDownloadCloudFill);
  }
});

export default IconDownloadCloudFill;