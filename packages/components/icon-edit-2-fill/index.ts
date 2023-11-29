import type { App } from 'vue';
import _IconEdit2Fill from './icon-edit-2-fill.vue';

const IconEdit2Fill = Object.assign(_IconEdit2Fill, {
  install: (app: App) => {
    app.component(_IconEdit2Fill.name, _IconEdit2Fill);
  }
});

export default IconEdit2Fill;