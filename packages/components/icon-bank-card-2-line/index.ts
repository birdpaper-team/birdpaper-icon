import type { App } from 'vue';
import _IconBankCard2Line from './icon-bank-card-2-line.vue';

const IconBankCard2Line = Object.assign(_IconBankCard2Line, {
  install: (app: App) => {
    app.component(_IconBankCard2Line.name, _IconBankCard2Line);
  }
});

export default IconBankCard2Line;