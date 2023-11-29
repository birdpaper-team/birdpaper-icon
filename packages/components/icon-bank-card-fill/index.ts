import type { App } from 'vue';
import _IconBankCardFill from './icon-bank-card-fill.vue';

const IconBankCardFill = Object.assign(_IconBankCardFill, {
  install: (app: App) => {
    app.component(_IconBankCardFill.name, _IconBankCardFill);
  }
});

export default IconBankCardFill;