import type { App } from 'vue';
import _IconMoneyRupeeCircleLine from './icon-money-rupee-circle-line.vue';

const IconMoneyRupeeCircleLine = Object.assign(_IconMoneyRupeeCircleLine, {
  install: (app: App) => {
    app.component(_IconMoneyRupeeCircleLine.name, _IconMoneyRupeeCircleLine);
  }
});

export default IconMoneyRupeeCircleLine;