import type { App } from 'vue';
import _IconMoneyPoundBoxLine from './icon-money-pound-box-line.vue';

const IconMoneyPoundBoxLine = Object.assign(_IconMoneyPoundBoxLine, {
  install: (app: App) => {
    app.component(_IconMoneyPoundBoxLine.name, _IconMoneyPoundBoxLine);
  }
});

export default IconMoneyPoundBoxLine;