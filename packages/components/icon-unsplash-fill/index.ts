import type { App } from 'vue';
import _IconUnsplashFill from './icon-unsplash-fill.vue';

const IconUnsplashFill = Object.assign(_IconUnsplashFill, {
  install: (app: App) => {
    app.component(_IconUnsplashFill.name, _IconUnsplashFill);
  }
});

export default IconUnsplashFill;