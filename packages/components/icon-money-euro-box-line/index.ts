import type { App } from 'vue';
import _IconMoneyEuroBoxLine from './icon-money-euro-box-line.vue';

const IconMoneyEuroBoxLine = Object.assign(_IconMoneyEuroBoxLine, {
  install: (app: App) => {
    app.component(_IconMoneyEuroBoxLine.name, _IconMoneyEuroBoxLine);
  }
});

export default IconMoneyEuroBoxLine;