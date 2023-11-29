import type { App } from 'vue';
import _IconMovie from './icon-movie.vue';

const IconMovie = Object.assign(_IconMovie, {
  install: (app: App) => {
    app.component(_IconMovie.name, _IconMovie);
  }
});

export default IconMovie;