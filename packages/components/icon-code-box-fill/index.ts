import type { App } from 'vue';
import _IconCodeBoxFill from './icon-code-box-fill.vue';

const IconCodeBoxFill = Object.assign(_IconCodeBoxFill, {
  install: (app: App) => {
    app.component(_IconCodeBoxFill.name, _IconCodeBoxFill);
  }
});

export default IconCodeBoxFill;