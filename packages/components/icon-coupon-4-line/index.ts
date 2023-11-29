import type { App } from 'vue';
import _IconCoupon4Line from './icon-coupon-4-line.vue';

const IconCoupon4Line = Object.assign(_IconCoupon4Line, {
  install: (app: App) => {
    app.component(_IconCoupon4Line.name, _IconCoupon4Line);
  }
});

export default IconCoupon4Line;