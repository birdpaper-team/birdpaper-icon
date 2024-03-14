import type { App } from 'vue';
import _IconProgress8Fill from './icon-progress-8-fill.vue';

const IconProgress8Fill = Object.assign(_IconProgress8Fill, {
  install: (app: App) => {
    app.component(_IconProgress8Fill.name, _IconProgress8Fill);
  }
});

export default IconProgress8Fill;