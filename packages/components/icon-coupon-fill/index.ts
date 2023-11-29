import type { App } from 'vue';
import _IconCouponFill from './icon-coupon-fill.vue';

const IconCouponFill = Object.assign(_IconCouponFill, {
  install: (app: App) => {
    app.component(_IconCouponFill.name, _IconCouponFill);
  }
});

export default IconCouponFill;