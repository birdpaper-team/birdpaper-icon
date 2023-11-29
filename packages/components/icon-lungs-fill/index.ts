import type { App } from 'vue';
import _IconLungsFill from './icon-lungs-fill.vue';

const IconLungsFill = Object.assign(_IconLungsFill, {
  install: (app: App) => {
    app.component(_IconLungsFill.name, _IconLungsFill);
  }
});

export default IconLungsFill;