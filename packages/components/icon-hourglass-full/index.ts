import type { App } from 'vue';
import _IconHourglassFull from './icon-hourglass-full.vue';

const IconHourglassFull = Object.assign(_IconHourglassFull, {
  install: (app: App) => {
    app.component(_IconHourglassFull.name, _IconHourglassFull);
  }
});

export default IconHourglassFull;