import type { App } from 'vue';
import _IconSetOff from './icon-set-off.vue';

const IconSetOff = Object.assign(_IconSetOff, {
  install: (app: App) => {
    app.component(_IconSetOff.name, _IconSetOff);
  }
});

export default IconSetOff;