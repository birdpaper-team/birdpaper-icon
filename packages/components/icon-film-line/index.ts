import type { App } from 'vue';
import _IconFilmLine from './icon-film-line.vue';

const IconFilmLine = Object.assign(_IconFilmLine, {
  install: (app: App) => {
    app.component(_IconFilmLine.name, _IconFilmLine);
  }
});

export default IconFilmLine;