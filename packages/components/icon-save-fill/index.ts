import type { App } from 'vue';
import _IconSaveFill from './icon-save-fill.vue';

const IconSaveFill = Object.assign(_IconSaveFill, {
  install: (app: App) => {
    app.component(_IconSaveFill.name, _IconSaveFill);
  }
});

export default IconSaveFill;