import type { App } from 'vue';
import _IconOperaFill from './icon-opera-fill.vue';

const IconOperaFill = Object.assign(_IconOperaFill, {
  install: (app: App) => {
    app.component(_IconOperaFill.name, _IconOperaFill);
  }
});

export default IconOperaFill;