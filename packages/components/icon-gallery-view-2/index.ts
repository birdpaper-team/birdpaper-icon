import type { App } from 'vue';
import _IconGalleryView2 from './icon-gallery-view-2.vue';

const IconGalleryView2 = Object.assign(_IconGalleryView2, {
  install: (app: App) => {
    app.component(_IconGalleryView2.name, _IconGalleryView2);
  }
});

export default IconGalleryView2;