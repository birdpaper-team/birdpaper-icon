import type { App } from 'vue';
import _IconGalleryView from './icon-gallery-view.vue';

const IconGalleryView = Object.assign(_IconGalleryView, {
  install: (app: App) => {
    app.component(_IconGalleryView.name, _IconGalleryView);
  }
});

export default IconGalleryView;