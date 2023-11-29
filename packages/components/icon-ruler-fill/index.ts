import type { App } from 'vue';
import _IconRulerFill from './icon-ruler-fill.vue';

const IconRulerFill = Object.assign(_IconRulerFill, {
  install: (app: App) => {
    app.component(_IconRulerFill.name, _IconRulerFill);
  }
});

export default IconRulerFill;