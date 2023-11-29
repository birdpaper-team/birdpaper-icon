import type { App } from 'vue';
import _IconGlasses2Fill from './icon-glasses-2-fill.vue';

const IconGlasses2Fill = Object.assign(_IconGlasses2Fill, {
  install: (app: App) => {
    app.component(_IconGlasses2Fill.name, _IconGlasses2Fill);
  }
});

export default IconGlasses2Fill;