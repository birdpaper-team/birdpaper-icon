import type { App } from 'vue';
import _IconDisabledLaptop from './icon-disabled-laptop.vue';

const IconDisabledLaptop = Object.assign(_IconDisabledLaptop, {
  install: (app: App) => {
    app.component(_IconDisabledLaptop.name, _IconDisabledLaptop);
  }
});

export default IconDisabledLaptop;