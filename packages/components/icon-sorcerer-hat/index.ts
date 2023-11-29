import type { App } from 'vue';
import _IconSorcererHat from './icon-sorcerer-hat.vue';

const IconSorcererHat = Object.assign(_IconSorcererHat, {
  install: (app: App) => {
    app.component(_IconSorcererHat.name, _IconSorcererHat);
  }
});

export default IconSorcererHat;