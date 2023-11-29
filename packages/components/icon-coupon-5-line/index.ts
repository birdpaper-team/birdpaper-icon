import type { App } from 'vue';
import _IconCoupon5Line from './icon-coupon-5-line.vue';

const IconCoupon5Line = Object.assign(_IconCoupon5Line, {
  install: (app: App) => {
    app.component(_IconCoupon5Line.name, _IconCoupon5Line);
  }
});

export default IconCoupon5Line;