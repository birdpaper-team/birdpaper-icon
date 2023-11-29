import type { App } from 'vue';
import _IconFilmFill from './icon-film-fill.vue';

const IconFilmFill = Object.assign(_IconFilmFill, {
  install: (app: App) => {
    app.component(_IconFilmFill.name, _IconFilmFill);
  }
});

export default IconFilmFill;