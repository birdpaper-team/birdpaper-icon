import type { App } from 'vue';
import _IconMoonClearFill from './icon-moon-clear-fill.vue';

const IconMoonClearFill = Object.assign(_IconMoonClearFill, {
  install: (app: App) => {
    app.component(_IconMoonClearFill.name, _IconMoonClearFill);
  }
});

export default IconMoonClearFill;