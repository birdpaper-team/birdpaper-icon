import type { App } from 'vue';
import _IconCoupon3Fill from './icon-coupon-3-fill.vue';

const IconCoupon3Fill = Object.assign(_IconCoupon3Fill, {
  install: (app: App) => {
    app.component(_IconCoupon3Fill.name, _IconCoupon3Fill);
  }
});

export default IconCoupon3Fill;