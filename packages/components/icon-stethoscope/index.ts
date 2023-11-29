import type { App } from 'vue';
import _IconStethoscope from './icon-stethoscope.vue';

const IconStethoscope = Object.assign(_IconStethoscope, {
  install: (app: App) => {
    app.component(_IconStethoscope.name, _IconStethoscope);
  }
});

export default IconStethoscope;