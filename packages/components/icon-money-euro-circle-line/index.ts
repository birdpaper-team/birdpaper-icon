import type { App } from 'vue';
import _IconMoneyEuroCircleLine from './icon-money-euro-circle-line.vue';

const IconMoneyEuroCircleLine = Object.assign(_IconMoneyEuroCircleLine, {
  install: (app: App) => {
    app.component(_IconMoneyEuroCircleLine.name, _IconMoneyEuroCircleLine);
  }
});

export default IconMoneyEuroCircleLine;