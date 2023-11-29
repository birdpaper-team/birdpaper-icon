import type { App } from 'vue';
import _IconCodeFill from './icon-code-fill.vue';

const IconCodeFill = Object.assign(_IconCodeFill, {
  install: (app: App) => {
    app.component(_IconCodeFill.name, _IconCodeFill);
  }
});

export default IconCodeFill;