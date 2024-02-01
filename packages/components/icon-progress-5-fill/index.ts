import type { App } from 'vue';
import _IconProgress5Fill from './icon-progress-5-fill.vue';

const IconProgress5Fill = Object.assign(_IconProgress5Fill, {
  install: (app: App) => {
    app.component(_IconProgress5Fill.name, _IconProgress5Fill);
  }
});

export default IconProgress5Fill;