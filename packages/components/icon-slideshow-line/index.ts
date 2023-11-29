import type { App } from 'vue';
import _IconSlideshowLine from './icon-slideshow-line.vue';

const IconSlideshowLine = Object.assign(_IconSlideshowLine, {
  install: (app: App) => {
    app.component(_IconSlideshowLine.name, _IconSlideshowLine);
  }
});

export default IconSlideshowLine;