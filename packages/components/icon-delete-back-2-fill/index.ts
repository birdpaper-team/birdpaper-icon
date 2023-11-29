import type { App } from 'vue';
import _IconDeleteBack2Fill from './icon-delete-back-2-fill.vue';

const IconDeleteBack2Fill = Object.assign(_IconDeleteBack2Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBack2Fill.name, _IconDeleteBack2Fill);
  }
});

export default IconDeleteBack2Fill;