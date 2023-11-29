import type { App } from 'vue';
import _IconMagicHat from './icon-magic-hat.vue';

const IconMagicHat = Object.assign(_IconMagicHat, {
  install: (app: App) => {
    app.component(_IconMagicHat.name, _IconMagicHat);
  }
});

export default IconMagicHat;