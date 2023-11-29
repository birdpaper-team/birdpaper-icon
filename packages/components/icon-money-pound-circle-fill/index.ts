import type { App } from 'vue';
import _IconMoneyPoundCircleFill from './icon-money-pound-circle-fill.vue';

const IconMoneyPoundCircleFill = Object.assign(_IconMoneyPoundCircleFill, {
  install: (app: App) => {
    app.component(_IconMoneyPoundCircleFill.name, _IconMoneyPoundCircleFill);
  }
});

export default IconMoneyPoundCircleFill;