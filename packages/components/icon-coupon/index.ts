import type { App } from 'vue';
import _IconCoupon from './icon-coupon.vue';

const IconCoupon = Object.assign(_IconCoupon, {
  install: (app: App) => {
    app.component(_IconCoupon.name, _IconCoupon);
  }
});

export default IconCoupon;