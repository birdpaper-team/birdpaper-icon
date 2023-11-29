import type { App } from 'vue';
import _IconMoneyEuroCircleFill from './icon-money-euro-circle-fill.vue';

const IconMoneyEuroCircleFill = Object.assign(_IconMoneyEuroCircleFill, {
  install: (app: App) => {
    app.component(_IconMoneyEuroCircleFill.name, _IconMoneyEuroCircleFill);
  }
});

export default IconMoneyEuroCircleFill;