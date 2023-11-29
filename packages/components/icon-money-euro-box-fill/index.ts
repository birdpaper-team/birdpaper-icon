import type { App } from 'vue';
import _IconMoneyEuroBoxFill from './icon-money-euro-box-fill.vue';

const IconMoneyEuroBoxFill = Object.assign(_IconMoneyEuroBoxFill, {
  install: (app: App) => {
    app.component(_IconMoneyEuroBoxFill.name, _IconMoneyEuroBoxFill);
  }
});

export default IconMoneyEuroBoxFill;