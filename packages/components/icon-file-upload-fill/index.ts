import type { App } from 'vue';
import _IconFileUploadFill from './icon-file-upload-fill.vue';

const IconFileUploadFill = Object.assign(_IconFileUploadFill, {
  install: (app: App) => {
    app.component(_IconFileUploadFill.name, _IconFileUploadFill);
  }
});

export default IconFileUploadFill;