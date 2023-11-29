import type { App } from 'vue';
import _IconSunHat from './icon-sun-hat.vue';

const IconSunHat = Object.assign(_IconSunHat, {
  install: (app: App) => {
    app.component(_IconSunHat.name, _IconSunHat);
  }
});

export default IconSunHat;