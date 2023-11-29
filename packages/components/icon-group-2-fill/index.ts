import type { App } from 'vue';
import _IconGroup2Fill from './icon-group-2-fill.vue';

const IconGroup2Fill = Object.assign(_IconGroup2Fill, {
  install: (app: App) => {
    app.component(_IconGroup2Fill.name, _IconGroup2Fill);
  }
});

export default IconGroup2Fill;