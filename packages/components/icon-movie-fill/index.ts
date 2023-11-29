import type { App } from 'vue';
import _IconMovieFill from './icon-movie-fill.vue';

const IconMovieFill = Object.assign(_IconMovieFill, {
  install: (app: App) => {
    app.component(_IconMovieFill.name, _IconMovieFill);
  }
});

export default IconMovieFill;