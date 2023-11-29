import type { App } from 'vue';
import _IconSave3Fill from './icon-save-3-fill.vue';

const IconSave3Fill = Object.assign(_IconSave3Fill, {
  install: (app: App) => {
    app.component(_IconSave3Fill.name, _IconSave3Fill);
  }
});

export default IconSave3Fill;