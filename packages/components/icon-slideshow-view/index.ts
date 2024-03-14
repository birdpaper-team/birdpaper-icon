import type { App } from 'vue';
import _IconSlideshowView from './icon-slideshow-view.vue';

const IconSlideshowView = Object.assign(_IconSlideshowView, {
  install: (app: App) => {
    app.component(_IconSlideshowView.name, _IconSlideshowView);
  }
});

export default IconSlideshowView;