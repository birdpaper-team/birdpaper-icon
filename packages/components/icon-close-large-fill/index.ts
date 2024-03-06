import type { App } from 'vue';
import _IconCloseLargeFill from './icon-close-large-fill.vue';

const IconCloseLargeFill = Object.assign(_IconCloseLargeFill, {
  install: (app: App) => {
    app.component(_IconCloseLargeFill.name, _IconCloseLargeFill);
  }
});

export default IconCloseLargeFill;