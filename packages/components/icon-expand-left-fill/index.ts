import type { App } from 'vue';
import _IconExpandLeftFill from './icon-expand-left-fill.vue';

const IconExpandLeftFill = Object.assign(_IconExpandLeftFill, {
  install: (app: App) => {
    app.component(_IconExpandLeftFill.name, _IconExpandLeftFill);
  }
});

export default IconExpandLeftFill;