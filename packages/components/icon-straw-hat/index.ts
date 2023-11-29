import type { App } from 'vue';
import _IconStrawHat from './icon-straw-hat.vue';

const IconStrawHat = Object.assign(_IconStrawHat, {
  install: (app: App) => {
    app.component(_IconStrawHat.name, _IconStrawHat);
  }
});

export default IconStrawHat;