import type { App } from 'vue';
import _IconSquareFill from './icon-square-fill.vue';

const IconSquareFill = Object.assign(_IconSquareFill, {
  install: (app: App) => {
    app.component(_IconSquareFill.name, _IconSquareFill);
  }
});

export default IconSquareFill;