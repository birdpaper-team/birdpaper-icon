import type { App } from 'vue';
import _IconMailStarLine from './icon-mail-star-line.vue';

const IconMailStarLine = Object.assign(_IconMailStarLine, {
  install: (app: App) => {
    app.component(_IconMailStarLine.name, _IconMailStarLine);
  }
});

export default IconMailStarLine;