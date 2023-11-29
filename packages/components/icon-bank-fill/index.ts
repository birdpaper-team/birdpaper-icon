import type { App } from 'vue';
import _IconBankFill from './icon-bank-fill.vue';

const IconBankFill = Object.assign(_IconBankFill, {
  install: (app: App) => {
    app.component(_IconBankFill.name, _IconBankFill);
  }
});

export default IconBankFill;