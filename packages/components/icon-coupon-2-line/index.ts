import type { App } from 'vue';
import _IconCoupon2Line from './icon-coupon-2-line.vue';

const IconCoupon2Line = Object.assign(_IconCoupon2Line, {
  install: (app: App) => {
    app.component(_IconCoupon2Line.name, _IconCoupon2Line);
  }
});

export default IconCoupon2Line;