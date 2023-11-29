import type { App } from 'vue';
import _IconInfusion from './icon-infusion.vue';

const IconInfusion = Object.assign(_IconInfusion, {
  install: (app: App) => {
    app.component(_IconInfusion.name, _IconInfusion);
  }
});

export default IconInfusion;