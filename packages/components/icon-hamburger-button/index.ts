import type { App } from 'vue';
import _IconHamburgerButton from './icon-hamburger-button.vue';

const IconHamburgerButton = Object.assign(_IconHamburgerButton, {
  install: (app: App) => {
    app.component(_IconHamburgerButton.name, _IconHamburgerButton);
  }
});

export default IconHamburgerButton;