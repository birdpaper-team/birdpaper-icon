import type { App } from 'vue';
import _IconHourglassFill from './icon-hourglass-fill.vue';

const IconHourglassFill = Object.assign(_IconHourglassFill, {
  install: (app: App) => {
    app.component(_IconHourglassFill.name, _IconHourglassFill);
  }
});

export default IconHourglassFill;