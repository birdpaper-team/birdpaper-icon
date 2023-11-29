import type { App } from 'vue';
import _IconGalleryUploadFill from './icon-gallery-upload-fill.vue';

const IconGalleryUploadFill = Object.assign(_IconGalleryUploadFill, {
  install: (app: App) => {
    app.component(_IconGalleryUploadFill.name, _IconGalleryUploadFill);
  }
});

export default IconGalleryUploadFill;