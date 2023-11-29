import type { App } from 'vue';
import _IconCurveAdjustment from './icon-curve-adjustment.vue';

const IconCurveAdjustment = Object.assign(_IconCurveAdjustment, {
  install: (app: App) => {
    app.component(_IconCurveAdjustment.name, _IconCurveAdjustment);
  }
});

export default IconCurveAdjustment;