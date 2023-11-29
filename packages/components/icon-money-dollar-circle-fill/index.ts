import type { App } from 'vue';
import _IconMoneyDollarCircleFill from './icon-money-dollar-circle-fill.vue';

const IconMoneyDollarCircleFill = Object.assign(_IconMoneyDollarCircleFill, {
  install: (app: App) => {
    app.component(_IconMoneyDollarCircleFill.name, _IconMoneyDollarCircleFill);
  }
});

export default IconMoneyDollarCircleFill;