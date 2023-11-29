import type { App } from 'vue';
import _IconDatabase2Fill from './icon-database-2-fill.vue';

const IconDatabase2Fill = Object.assign(_IconDatabase2Fill, {
  install: (app: App) => {
    app.component(_IconDatabase2Fill.name, _IconDatabase2Fill);
  }
});

export default IconDatabase2Fill;