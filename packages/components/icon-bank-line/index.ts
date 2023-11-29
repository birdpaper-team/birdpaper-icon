import type { App } from 'vue';
import _IconBankLine from './icon-bank-line.vue';

const IconBankLine = Object.assign(_IconBankLine, {
  install: (app: App) => {
    app.component(_IconBankLine.name, _IconBankLine);
  }
});

export default IconBankLine;