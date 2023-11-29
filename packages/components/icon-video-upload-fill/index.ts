import type { App } from 'vue';
import _IconVideoUploadFill from './icon-video-upload-fill.vue';

const IconVideoUploadFill = Object.assign(_IconVideoUploadFill, {
  install: (app: App) => {
    app.component(_IconVideoUploadFill.name, _IconVideoUploadFill);
  }
});

export default IconVideoUploadFill;