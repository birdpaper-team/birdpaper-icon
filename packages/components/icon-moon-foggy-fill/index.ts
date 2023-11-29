import type { App } from 'vue';
import _IconMoonFoggyFill from './icon-moon-foggy-fill.vue';

const IconMoonFoggyFill = Object.assign(_IconMoonFoggyFill, {
  install: (app: App) => {
    app.component(_IconMoonFoggyFill.name, _IconMoonFoggyFill);
  }
});

export default IconMoonFoggyFill;