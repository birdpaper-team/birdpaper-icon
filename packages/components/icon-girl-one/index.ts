import type { App } from 'vue';
import _IconGirlOne from './icon-girl-one.vue';

const IconGirlOne = Object.assign(_IconGirlOne, {
  install: (app: App) => {
    app.component(_IconGirlOne.name, _IconGirlOne);
  }
});

export default IconGirlOne;