import type { App } from 'vue';
import _IconPulseFill from './icon-pulse-fill.vue';

const IconPulseFill = Object.assign(_IconPulseFill, {
  install: (app: App) => {
    app.component(_IconPulseFill.name, _IconPulseFill);
  }
});

export default IconPulseFill;