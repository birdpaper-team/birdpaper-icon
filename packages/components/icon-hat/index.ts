import type { App } from 'vue';
import _IconHat from './icon-hat.vue';

const IconHat = Object.assign(_IconHat, {
  install: (app: App) => {
    app.component(_IconHat.name, _IconHat);
  }
});

export default IconHat;