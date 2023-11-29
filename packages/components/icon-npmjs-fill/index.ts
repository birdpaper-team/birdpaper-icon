import type { App } from 'vue';
import _IconNpmjsFill from './icon-npmjs-fill.vue';

const IconNpmjsFill = Object.assign(_IconNpmjsFill, {
  install: (app: App) => {
    app.component(_IconNpmjsFill.name, _IconNpmjsFill);
  }
});

export default IconNpmjsFill;