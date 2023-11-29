import type { App } from 'vue';
import _IconGalleryUploadLine from './icon-gallery-upload-line.vue';

const IconGalleryUploadLine = Object.assign(_IconGalleryUploadLine, {
  install: (app: App) => {
    app.component(_IconGalleryUploadLine.name, _IconGalleryUploadLine);
  }
});

export default IconGalleryUploadLine;