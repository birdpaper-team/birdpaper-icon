import type { App } from 'vue';
import _IconStarHalfSLine from './icon-star-half-s-line.vue';

const IconStarHalfSLine = Object.assign(_IconStarHalfSLine, {
  install: (app: App) => {
    app.component(_IconStarHalfSLine.name, _IconStarHalfSLine);
  }
});

export default IconStarHalfSLine;