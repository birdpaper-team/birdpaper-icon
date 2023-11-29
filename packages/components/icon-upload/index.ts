import type { App } from 'vue';
import _IconUpload from './icon-upload.vue';

const IconUpload = Object.assign(_IconUpload, {
  install: (app: App) => {
    app.component(_IconUpload.name, _IconUpload);
  }
});

export default IconUpload;