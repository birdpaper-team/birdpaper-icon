import type { App } from 'vue';
import _IconProgress7Fill from './icon-progress-7-fill.vue';

const IconProgress7Fill = Object.assign(_IconProgress7Fill, {
  install: (app: App) => {
    app.component(_IconProgress7Fill.name, _IconProgress7Fill);
  }
});

export default IconProgress7Fill;