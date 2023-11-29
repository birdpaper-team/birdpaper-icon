import type { App } from 'vue';
import _IconStarHalfLine from './icon-star-half-line.vue';

const IconStarHalfLine = Object.assign(_IconStarHalfLine, {
  install: (app: App) => {
    app.component(_IconStarHalfLine.name, _IconStarHalfLine);
  }
});

export default IconStarHalfLine;