import type { App } from 'vue';
import _IconInternalReduction from './icon-internal-reduction.vue';

const IconInternalReduction = Object.assign(_IconInternalReduction, {
  install: (app: App) => {
    app.component(_IconInternalReduction.name, _IconInternalReduction);
  }
});

export default IconInternalReduction;