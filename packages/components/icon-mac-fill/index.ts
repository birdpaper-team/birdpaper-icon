import type { App } from 'vue';
import _IconMacFill from './icon-mac-fill.vue';

const IconMacFill = Object.assign(_IconMacFill, {
  install: (app: App) => {
    app.component(_IconMacFill.name, _IconMacFill);
  }
});

export default IconMacFill;