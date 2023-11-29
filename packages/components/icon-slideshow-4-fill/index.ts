import type { App } from 'vue';
import _IconSlideshow4Fill from './icon-slideshow-4-fill.vue';

const IconSlideshow4Fill = Object.assign(_IconSlideshow4Fill, {
  install: (app: App) => {
    app.component(_IconSlideshow4Fill.name, _IconSlideshow4Fill);
  }
});

export default IconSlideshow4Fill;