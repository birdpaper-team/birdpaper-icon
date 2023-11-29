import type { App } from 'vue';
import _Icon24HoursFill from './icon-24-hours-fill.vue';

const Icon24HoursFill = Object.assign(_Icon24HoursFill, {
  install: (app: App) => {
    app.component(_Icon24HoursFill.name, _Icon24HoursFill);
  }
});

export default Icon24HoursFill;