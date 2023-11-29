import type { App } from 'vue';
import _IconMovie2Fill from './icon-movie-2-fill.vue';

const IconMovie2Fill = Object.assign(_IconMovie2Fill, {
  install: (app: App) => {
    app.component(_IconMovie2Fill.name, _IconMovie2Fill);
  }
});

export default IconMovie2Fill;