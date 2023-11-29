import type { App } from 'vue';
import _IconMagicFill from './icon-magic-fill.vue';

const IconMagicFill = Object.assign(_IconMagicFill, {
  install: (app: App) => {
    app.component(_IconMagicFill.name, _IconMagicFill);
  }
});

export default IconMagicFill;