import type { App } from 'vue';
import _IconWeightFill from './icon-weight-fill.vue';

const IconWeightFill = Object.assign(_IconWeightFill, {
  install: (app: App) => {
    app.component(_IconWeightFill.name, _IconWeightFill);
  }
});

export default IconWeightFill;