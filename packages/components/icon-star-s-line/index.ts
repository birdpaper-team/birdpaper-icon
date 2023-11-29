import type { App } from 'vue';
import _IconStarSLine from './icon-star-s-line.vue';

const IconStarSLine = Object.assign(_IconStarSLine, {
  install: (app: App) => {
    app.component(_IconStarSLine.name, _IconStarSLine);
  }
});

export default IconStarSLine;