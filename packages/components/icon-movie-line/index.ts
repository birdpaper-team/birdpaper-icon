import type { App } from 'vue';
import _IconMovieLine from './icon-movie-line.vue';

const IconMovieLine = Object.assign(_IconMovieLine, {
  install: (app: App) => {
    app.component(_IconMovieLine.name, _IconMovieLine);
  }
});

export default IconMovieLine;