import type { App } from 'vue';
import _IconSliceFill from './icon-slice-fill.vue';

const IconSliceFill = Object.assign(_IconSliceFill, {
  install: (app: App) => {
    app.component(_IconSliceFill.name, _IconSliceFill);
  }
});

export default IconSliceFill;