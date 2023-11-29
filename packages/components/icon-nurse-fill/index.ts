import type { App } from 'vue';
import _IconNurseFill from './icon-nurse-fill.vue';

const IconNurseFill = Object.assign(_IconNurseFill, {
  install: (app: App) => {
    app.component(_IconNurseFill.name, _IconNurseFill);
  }
});

export default IconNurseFill;