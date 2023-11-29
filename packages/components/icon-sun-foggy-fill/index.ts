import type { App } from 'vue';
import _IconSunFoggyFill from './icon-sun-foggy-fill.vue';

const IconSunFoggyFill = Object.assign(_IconSunFoggyFill, {
  install: (app: App) => {
    app.component(_IconSunFoggyFill.name, _IconSunFoggyFill);
  }
});

export default IconSunFoggyFill;