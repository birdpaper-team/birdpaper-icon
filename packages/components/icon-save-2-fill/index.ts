import type { App } from 'vue';
import _IconSave2Fill from './icon-save-2-fill.vue';

const IconSave2Fill = Object.assign(_IconSave2Fill, {
  install: (app: App) => {
    app.component(_IconSave2Fill.name, _IconSave2Fill);
  }
});

export default IconSave2Fill;