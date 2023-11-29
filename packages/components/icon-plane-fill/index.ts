import type { App } from 'vue';
import _IconPlaneFill from './icon-plane-fill.vue';

const IconPlaneFill = Object.assign(_IconPlaneFill, {
  install: (app: App) => {
    app.component(_IconPlaneFill.name, _IconPlaneFill);
  }
});

export default IconPlaneFill;