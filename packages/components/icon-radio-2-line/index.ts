import type { App } from 'vue';
import _IconRadio2Line from './icon-radio-2-line.vue';

const IconRadio2Line = Object.assign(_IconRadio2Line, {
  install: (app: App) => {
    app.component(_IconRadio2Line.name, _IconRadio2Line);
  }
});

export default IconRadio2Line;