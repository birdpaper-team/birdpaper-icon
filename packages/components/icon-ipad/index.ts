import type { App } from 'vue';
import _IconIpad from './icon-ipad.vue';

const IconIpad = Object.assign(_IconIpad, {
  install: (app: App) => {
    app.component(_IconIpad.name, _IconIpad);
  }
});

export default IconIpad;