import type { App } from 'vue';
import _IconSlideshow4Line from './icon-slideshow-4-line.vue';

const IconSlideshow4Line = Object.assign(_IconSlideshow4Line, {
  install: (app: App) => {
    app.component(_IconSlideshow4Line.name, _IconSlideshow4Line);
  }
});

export default IconSlideshow4Line;