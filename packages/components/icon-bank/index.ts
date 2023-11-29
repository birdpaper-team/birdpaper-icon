import type { App } from 'vue';
import _IconBank from './icon-bank.vue';

const IconBank = Object.assign(_IconBank, {
  install: (app: App) => {
    app.component(_IconBank.name, _IconBank);
  }
});

export default IconBank;