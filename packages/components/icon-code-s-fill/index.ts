import type { App } from 'vue';
import _IconCodeSFill from './icon-code-s-fill.vue';

const IconCodeSFill = Object.assign(_IconCodeSFill, {
  install: (app: App) => {
    app.component(_IconCodeSFill.name, _IconCodeSFill);
  }
});

export default IconCodeSFill;