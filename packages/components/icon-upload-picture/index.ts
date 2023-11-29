import type { App } from 'vue';
import _IconUploadPicture from './icon-upload-picture.vue';

const IconUploadPicture = Object.assign(_IconUploadPicture, {
  install: (app: App) => {
    app.component(_IconUploadPicture.name, _IconUploadPicture);
  }
});

export default IconUploadPicture;