import type { App } from 'vue';
import _IconUnsplashLine from './icon-unsplash-line.vue';

const IconUnsplashLine = Object.assign(_IconUnsplashLine, {
  install: (app: App) => {
    app.component(_IconUnsplashLine.name, _IconUnsplashLine);
  }
});

export default IconUnsplashLine;