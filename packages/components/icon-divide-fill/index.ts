import type { App } from 'vue';
import _IconDivideFill from './icon-divide-fill.vue';

const IconDivideFill = Object.assign(_IconDivideFill, {
  install: (app: App) => {
    app.component(_IconDivideFill.name, _IconDivideFill);
  }
});

export default IconDivideFill;