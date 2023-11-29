import type { App } from 'vue';
import _IconCoupon2Fill from './icon-coupon-2-fill.vue';

const IconCoupon2Fill = Object.assign(_IconCoupon2Fill, {
  install: (app: App) => {
    app.component(_IconCoupon2Fill.name, _IconCoupon2Fill);
  }
});

export default IconCoupon2Fill;