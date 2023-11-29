import type { App } from 'vue';
import _IconMoneyDollarCircleLine from './icon-money-dollar-circle-line.vue';

const IconMoneyDollarCircleLine = Object.assign(_IconMoneyDollarCircleLine, {
  install: (app: App) => {
    app.component(_IconMoneyDollarCircleLine.name, _IconMoneyDollarCircleLine);
  }
});

export default IconMoneyDollarCircleLine;