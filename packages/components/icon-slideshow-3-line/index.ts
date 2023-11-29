import type { App } from 'vue';
import _IconSlideshow3Line from './icon-slideshow-3-line.vue';

const IconSlideshow3Line = Object.assign(_IconSlideshow3Line, {
  install: (app: App) => {
    app.component(_IconSlideshow3Line.name, _IconSlideshow3Line);
  }
});

export default IconSlideshow3Line;