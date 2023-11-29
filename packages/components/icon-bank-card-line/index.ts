import type { App } from 'vue';
import _IconBankCardLine from './icon-bank-card-line.vue';

const IconBankCardLine = Object.assign(_IconBankCardLine, {
  install: (app: App) => {
    app.component(_IconBankCardLine.name, _IconBankCardLine);
  }
});

export default IconBankCardLine;