import type { App } from 'vue';
import _IconHamburgerOne from './icon-hamburger-one.vue';

const IconHamburgerOne = Object.assign(_IconHamburgerOne, {
  install: (app: App) => {
    app.component(_IconHamburgerOne.name, _IconHamburgerOne);
  }
});

export default IconHamburgerOne;