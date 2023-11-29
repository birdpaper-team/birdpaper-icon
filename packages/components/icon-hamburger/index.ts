import type { App } from 'vue';
import _IconHamburger from './icon-hamburger.vue';

const IconHamburger = Object.assign(_IconHamburger, {
  install: (app: App) => {
    app.component(_IconHamburger.name, _IconHamburger);
  }
});

export default IconHamburger;