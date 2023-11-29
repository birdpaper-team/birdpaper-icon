import type { App } from 'vue';
import _IconFireFill from './icon-fire-fill.vue';

const IconFireFill = Object.assign(_IconFireFill, {
  install: (app: App) => {
    app.component(_IconFireFill.name, _IconFireFill);
  }
});

export default IconFireFill;