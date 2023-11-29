import type { App } from 'vue';
import _IconPlan from './icon-plan.vue';

const IconPlan = Object.assign(_IconPlan, {
  install: (app: App) => {
    app.component(_IconPlan.name, _IconPlan);
  }
});

export default IconPlan;