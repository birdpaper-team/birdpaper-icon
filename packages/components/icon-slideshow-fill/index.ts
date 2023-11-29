import type { App } from 'vue';
import _IconSlideshowFill from './icon-slideshow-fill.vue';

const IconSlideshowFill = Object.assign(_IconSlideshowFill, {
  install: (app: App) => {
    app.component(_IconSlideshowFill.name, _IconSlideshowFill);
  }
});

export default IconSlideshowFill;