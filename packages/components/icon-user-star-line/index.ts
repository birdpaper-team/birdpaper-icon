import type { App } from 'vue';
import _IconUserStarLine from './icon-user-star-line.vue';

const IconUserStarLine = Object.assign(_IconUserStarLine, {
  install: (app: App) => {
    app.component(_IconUserStarLine.name, _IconUserStarLine);
  }
});

export default IconUserStarLine;