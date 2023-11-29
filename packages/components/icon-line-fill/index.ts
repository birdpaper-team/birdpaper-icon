import type { App } from 'vue';
import _IconLineFill from './icon-line-fill.vue';

const IconLineFill = Object.assign(_IconLineFill, {
  install: (app: App) => {
    app.component(_IconLineFill.name, _IconLineFill);
  }
});

export default IconLineFill;