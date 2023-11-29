import type { App } from 'vue';
import _IconGalleryFill from './icon-gallery-fill.vue';

const IconGalleryFill = Object.assign(_IconGalleryFill, {
  install: (app: App) => {
    app.component(_IconGalleryFill.name, _IconGalleryFill);
  }
});

export default IconGalleryFill;