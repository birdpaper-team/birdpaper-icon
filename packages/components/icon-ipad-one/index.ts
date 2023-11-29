import type { App } from 'vue';
import _IconIpadOne from './icon-ipad-one.vue';

const IconIpadOne = Object.assign(_IconIpadOne, {
  install: (app: App) => {
    app.component(_IconIpadOne.name, _IconIpadOne);
  }
});

export default IconIpadOne;