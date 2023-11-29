import type { App } from 'vue';
import _IconBringToFrontOne from './icon-bring-to-front-one.vue';

const IconBringToFrontOne = Object.assign(_IconBringToFrontOne, {
  install: (app: App) => {
    app.component(_IconBringToFrontOne.name, _IconBringToFrontOne);
  }
});

export default IconBringToFrontOne;