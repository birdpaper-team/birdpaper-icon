import type { App } from 'vue';
import _IconCoupon5Fill from './icon-coupon-5-fill.vue';

const IconCoupon5Fill = Object.assign(_IconCoupon5Fill, {
  install: (app: App) => {
    app.component(_IconCoupon5Fill.name, _IconCoupon5Fill);
  }
});

export default IconCoupon5Fill;