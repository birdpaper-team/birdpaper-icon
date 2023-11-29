import type { App } from 'vue';
import _IconMoneyDollarBoxFill from './icon-money-dollar-box-fill.vue';

const IconMoneyDollarBoxFill = Object.assign(_IconMoneyDollarBoxFill, {
  install: (app: App) => {
    app.component(_IconMoneyDollarBoxFill.name, _IconMoneyDollarBoxFill);
  }
});

export default IconMoneyDollarBoxFill;