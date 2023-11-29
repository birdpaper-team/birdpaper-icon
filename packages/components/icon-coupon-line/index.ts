import type { App } from 'vue';
import _IconCouponLine from './icon-coupon-line.vue';

const IconCouponLine = Object.assign(_IconCouponLine, {
  install: (app: App) => {
    app.component(_IconCouponLine.name, _IconCouponLine);
  }
});

export default IconCouponLine;