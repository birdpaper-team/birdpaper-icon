import type { App } from 'vue';
import _IconSunFill from './icon-sun-fill.vue';

const IconSunFill = Object.assign(_IconSunFill, {
  install: (app: App) => {
    app.component(_IconSunFill.name, _IconSunFill);
  }
});

export default IconSunFill;