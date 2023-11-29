import type { App } from 'vue';
import _IconUploadCloudFill from './icon-upload-cloud-fill.vue';

const IconUploadCloudFill = Object.assign(_IconUploadCloudFill, {
  install: (app: App) => {
    app.component(_IconUploadCloudFill.name, _IconUploadCloudFill);
  }
});

export default IconUploadCloudFill;