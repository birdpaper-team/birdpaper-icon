import type { App } from 'vue';
import _IconCodeLaptop from './icon-code-laptop.vue';

const IconCodeLaptop = Object.assign(_IconCodeLaptop, {
  install: (app: App) => {
    app.component(_IconCodeLaptop.name, _IconCodeLaptop);
  }
});

export default IconCodeLaptop;