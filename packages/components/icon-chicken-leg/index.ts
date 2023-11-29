import type { App } from 'vue';
import _IconChickenLeg from './icon-chicken-leg.vue';

const IconChickenLeg = Object.assign(_IconChickenLeg, {
  install: (app: App) => {
    app.component(_IconChickenLeg.name, _IconChickenLeg);
  }
});

export default IconChickenLeg;