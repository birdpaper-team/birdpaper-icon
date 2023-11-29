import type { App } from 'vue';
import _IconCoupon4Fill from './icon-coupon-4-fill.vue';

const IconCoupon4Fill = Object.assign(_IconCoupon4Fill, {
  install: (app: App) => {
    app.component(_IconCoupon4Fill.name, _IconCoupon4Fill);
  }
});

export default IconCoupon4Fill;