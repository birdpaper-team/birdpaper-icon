import type { App } from 'vue';
import _IconMoneyDollarBoxLine from './icon-money-dollar-box-line.vue';

const IconMoneyDollarBoxLine = Object.assign(_IconMoneyDollarBoxLine, {
  install: (app: App) => {
    app.component(_IconMoneyDollarBoxLine.name, _IconMoneyDollarBoxLine);
  }
});

export default IconMoneyDollarBoxLine;