import type { App } from 'vue';
import _IconSunOne from './icon-sun-one.vue';

const IconSunOne = Object.assign(_IconSunOne, {
  install: (app: App) => {
    app.component(_IconSunOne.name, _IconSunOne);
  }
});

export default IconSunOne;