import type { App } from 'vue';
import _IconDirectionAdjustment from './icon-direction-adjustment.vue';

const IconDirectionAdjustment = Object.assign(_IconDirectionAdjustment, {
  install: (app: App) => {
    app.component(_IconDirectionAdjustment.name, _IconDirectionAdjustment);
  }
});

export default IconDirectionAdjustment;