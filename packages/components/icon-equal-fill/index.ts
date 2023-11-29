import type { App } from 'vue';
import _IconEqualFill from './icon-equal-fill.vue';

const IconEqualFill = Object.assign(_IconEqualFill, {
  install: (app: App) => {
    app.component(_IconEqualFill.name, _IconEqualFill);
  }
});

export default IconEqualFill;