import type { App } from 'vue';
import _IconFinderLine from './icon-finder-line.vue';

const IconFinderLine = Object.assign(_IconFinderLine, {
  install: (app: App) => {
    app.component(_IconFinderLine.name, _IconFinderLine);
  }
});

export default IconFinderLine;