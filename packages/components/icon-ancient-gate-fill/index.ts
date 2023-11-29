import type { App } from 'vue';
import _IconAncientGateFill from './icon-ancient-gate-fill.vue';

const IconAncientGateFill = Object.assign(_IconAncientGateFill, {
  install: (app: App) => {
    app.component(_IconAncientGateFill.name, _IconAncientGateFill);
  }
});

export default IconAncientGateFill;