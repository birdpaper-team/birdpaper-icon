import type { App } from 'vue';
import _IconStethoscopeFill from './icon-stethoscope-fill.vue';

const IconStethoscopeFill = Object.assign(_IconStethoscopeFill, {
  install: (app: App) => {
    app.component(_IconStethoscopeFill.name, _IconStethoscopeFill);
  }
});

export default IconStethoscopeFill;