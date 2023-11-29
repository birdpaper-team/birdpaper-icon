import type { App } from 'vue';
import _IconNetflixFill from './icon-netflix-fill.vue';

const IconNetflixFill = Object.assign(_IconNetflixFill, {
  install: (app: App) => {
    app.component(_IconNetflixFill.name, _IconNetflixFill);
  }
});

export default IconNetflixFill;