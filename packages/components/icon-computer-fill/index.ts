import type { App } from 'vue';
import _IconComputerFill from './icon-computer-fill.vue';

const IconComputerFill = Object.assign(_IconComputerFill, {
  install: (app: App) => {
    app.component(_IconComputerFill.name, _IconComputerFill);
  }
});

export default IconComputerFill;