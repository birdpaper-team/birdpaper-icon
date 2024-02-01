import type { App } from 'vue';
import _IconProgress2Fill from './icon-progress-2-fill.vue';

const IconProgress2Fill = Object.assign(_IconProgress2Fill, {
  install: (app: App) => {
    app.component(_IconProgress2Fill.name, _IconProgress2Fill);
  }
});

export default IconProgress2Fill;