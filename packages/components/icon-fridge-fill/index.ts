import type { App } from 'vue';
import _IconFridgeFill from './icon-fridge-fill.vue';

const IconFridgeFill = Object.assign(_IconFridgeFill, {
  install: (app: App) => {
    app.component(_IconFridgeFill.name, _IconFridgeFill);
  }
});

export default IconFridgeFill;