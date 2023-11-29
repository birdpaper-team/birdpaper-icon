import type { App } from 'vue';
import _IconGuideFill from './icon-guide-fill.vue';

const IconGuideFill = Object.assign(_IconGuideFill, {
  install: (app: App) => {
    app.component(_IconGuideFill.name, _IconGuideFill);
  }
});

export default IconGuideFill;