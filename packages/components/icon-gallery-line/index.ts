import type { App } from 'vue';
import _IconGalleryLine from './icon-gallery-line.vue';

const IconGalleryLine = Object.assign(_IconGalleryLine, {
  install: (app: App) => {
    app.component(_IconGalleryLine.name, _IconGalleryLine);
  }
});

export default IconGalleryLine;