import type { App } from 'vue';
import _IconToggleFill from './icon-toggle-fill.vue';

const IconToggleFill = Object.assign(_IconToggleFill, {
  install: (app: App) => {
    app.component(_IconToggleFill.name, _IconToggleFill);
  }
});

export default IconToggleFill;