import type { App } from 'vue';
import _IconComputerOne from './icon-computer-one.vue';

const IconComputerOne = Object.assign(_IconComputerOne, {
  install: (app: App) => {
    app.component(_IconComputerOne.name, _IconComputerOne);
  }
});

export default IconComputerOne;