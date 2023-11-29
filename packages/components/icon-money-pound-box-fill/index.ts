import type { App } from 'vue';
import _IconMoneyPoundBoxFill from './icon-money-pound-box-fill.vue';

const IconMoneyPoundBoxFill = Object.assign(_IconMoneyPoundBoxFill, {
  install: (app: App) => {
    app.component(_IconMoneyPoundBoxFill.name, _IconMoneyPoundBoxFill);
  }
});

export default IconMoneyPoundBoxFill;