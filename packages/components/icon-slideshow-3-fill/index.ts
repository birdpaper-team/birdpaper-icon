import type { App } from 'vue';
import _IconSlideshow3Fill from './icon-slideshow-3-fill.vue';

const IconSlideshow3Fill = Object.assign(_IconSlideshow3Fill, {
  install: (app: App) => {
    app.component(_IconSlideshow3Fill.name, _IconSlideshow3Fill);
  }
});

export default IconSlideshow3Fill;