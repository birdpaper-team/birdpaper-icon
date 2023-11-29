import type { App } from 'vue';
import _IconSlideshow2Fill from './icon-slideshow-2-fill.vue';

const IconSlideshow2Fill = Object.assign(_IconSlideshow2Fill, {
  install: (app: App) => {
    app.component(_IconSlideshow2Fill.name, _IconSlideshow2Fill);
  }
});

export default IconSlideshow2Fill;