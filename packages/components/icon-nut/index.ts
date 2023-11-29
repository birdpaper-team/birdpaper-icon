import type { App } from 'vue';
import _IconNut from './icon-nut.vue';

const IconNut = Object.assign(_IconNut, {
  install: (app: App) => {
    app.component(_IconNut.name, _IconNut);
  }
});

export default IconNut;