import type { App } from 'vue';
import _IconBankCard2Fill from './icon-bank-card-2-fill.vue';

const IconBankCard2Fill = Object.assign(_IconBankCard2Fill, {
  install: (app: App) => {
    app.component(_IconBankCard2Fill.name, _IconBankCard2Fill);
  }
});

export default IconBankCard2Fill;