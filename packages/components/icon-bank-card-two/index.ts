import type { App } from 'vue';
import _IconBankCardTwo from './icon-bank-card-two.vue';

const IconBankCardTwo = Object.assign(_IconBankCardTwo, {
  install: (app: App) => {
    app.component(_IconBankCardTwo.name, _IconBankCardTwo);
  }
});

export default IconBankCardTwo;