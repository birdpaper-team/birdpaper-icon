import type { App } from 'vue';
import _IconCoupon3Line from './icon-coupon-3-line.vue';

const IconCoupon3Line = Object.assign(_IconCoupon3Line, {
  install: (app: App) => {
    app.component(_IconCoupon3Line.name, _IconCoupon3Line);
  }
});

export default IconCoupon3Line;