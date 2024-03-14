import type { App } from 'vue';
import _IconProgress1Fill from './icon-progress-1-fill.vue';

const IconProgress1Fill = Object.assign(_IconProgress1Fill, {
  install: (app: App) => {
    app.component(_IconProgress1Fill.name, _IconProgress1Fill);
  }
});

export default IconProgress1Fill;