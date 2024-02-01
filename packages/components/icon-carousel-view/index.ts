import type { App } from 'vue';
import _IconCarouselView from './icon-carousel-view.vue';

const IconCarouselView = Object.assign(_IconCarouselView, {
  install: (app: App) => {
    app.component(_IconCarouselView.name, _IconCarouselView);
  }
});

export default IconCarouselView;