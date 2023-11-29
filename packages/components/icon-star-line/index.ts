import type { App } from 'vue';
import _IconStarLine from './icon-star-line.vue';

const IconStarLine = Object.assign(_IconStarLine, {
  install: (app: App) => {
    app.component(_IconStarLine.name, _IconStarLine);
  }
});

export default IconStarLine;