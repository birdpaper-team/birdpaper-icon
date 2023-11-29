import type { App } from 'vue';
import _IconRestTimeFill from './icon-rest-time-fill.vue';

const IconRestTimeFill = Object.assign(_IconRestTimeFill, {
  install: (app: App) => {
    app.component(_IconRestTimeFill.name, _IconRestTimeFill);
  }
});

export default IconRestTimeFill;