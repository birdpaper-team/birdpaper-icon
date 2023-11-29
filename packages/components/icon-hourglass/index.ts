import type { App } from 'vue';
import _IconHourglass from './icon-hourglass.vue';

const IconHourglass = Object.assign(_IconHourglass, {
  install: (app: App) => {
    app.component(_IconHourglass.name, _IconHourglass);
  }
});

export default IconHourglass;