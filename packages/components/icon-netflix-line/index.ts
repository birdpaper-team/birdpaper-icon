import type { App } from 'vue';
import _IconNetflixLine from './icon-netflix-line.vue';

const IconNetflixLine = Object.assign(_IconNetflixLine, {
  install: (app: App) => {
    app.component(_IconNetflixLine.name, _IconNetflixLine);
  }
});

export default IconNetflixLine;