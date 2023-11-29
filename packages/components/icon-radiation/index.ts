import type { App } from 'vue';
import _IconRadiation from './icon-radiation.vue';

const IconRadiation = Object.assign(_IconRadiation, {
  install: (app: App) => {
    app.component(_IconRadiation.name, _IconRadiation);
  }
});

export default IconRadiation;