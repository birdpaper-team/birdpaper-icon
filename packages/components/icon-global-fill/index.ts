import type { App } from 'vue';
import _IconGlobalFill from './icon-global-fill.vue';

const IconGlobalFill = Object.assign(_IconGlobalFill, {
  install: (app: App) => {
    app.component(_IconGlobalFill.name, _IconGlobalFill);
  }
});

export default IconGlobalFill;