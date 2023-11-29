import type { App } from 'vue';
import _IconMoneyRupeeCircleFill from './icon-money-rupee-circle-fill.vue';

const IconMoneyRupeeCircleFill = Object.assign(_IconMoneyRupeeCircleFill, {
  install: (app: App) => {
    app.component(_IconMoneyRupeeCircleFill.name, _IconMoneyRupeeCircleFill);
  }
});

export default IconMoneyRupeeCircleFill;