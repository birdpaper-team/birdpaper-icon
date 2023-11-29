import type { App } from 'vue';
import _IconGlassesFill from './icon-glasses-fill.vue';

const IconGlassesFill = Object.assign(_IconGlassesFill, {
  install: (app: App) => {
    app.component(_IconGlassesFill.name, _IconGlassesFill);
  }
});

export default IconGlassesFill;