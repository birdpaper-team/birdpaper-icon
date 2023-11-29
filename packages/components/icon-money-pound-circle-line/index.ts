import type { App } from 'vue';
import _IconMoneyPoundCircleLine from './icon-money-pound-circle-line.vue';

const IconMoneyPoundCircleLine = Object.assign(_IconMoneyPoundCircleLine, {
  install: (app: App) => {
    app.component(_IconMoneyPoundCircleLine.name, _IconMoneyPoundCircleLine);
  }
});

export default IconMoneyPoundCircleLine;