import type { App } from 'vue';
import _IconUploadCloudLine from './icon-upload-cloud-line.vue';

const IconUploadCloudLine = Object.assign(_IconUploadCloudLine, {
  install: (app: App) => {
    app.component(_IconUploadCloudLine.name, _IconUploadCloudLine);
  }
});

export default IconUploadCloudLine;