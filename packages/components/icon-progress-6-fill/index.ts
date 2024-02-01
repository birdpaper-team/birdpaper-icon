import type { App } from 'vue';
import _IconProgress6Fill from './icon-progress-6-fill.vue';

const IconProgress6Fill = Object.assign(_IconProgress6Fill, {
  install: (app: App) => {
    app.component(_IconProgress6Fill.name, _IconProgress6Fill);
  }
});

export default IconProgress6Fill;