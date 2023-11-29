import type { App } from 'vue';
import _IconPaperMoney from './icon-paper-money.vue';

const IconPaperMoney = Object.assign(_IconPaperMoney, {
  install: (app: App) => {
    app.component(_IconPaperMoney.name, _IconPaperMoney);
  }
});

export default IconPaperMoney;