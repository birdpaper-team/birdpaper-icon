import type { App } from 'vue';
import _IconCarousel from './icon-carousel.vue';

const IconCarousel = Object.assign(_IconCarousel, {
  install: (app: App) => {
    app.component(_IconCarousel.name, _IconCarousel);
  }
});

export default IconCarousel;