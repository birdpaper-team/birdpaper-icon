import type { App } from 'vue';
import _IconFundsLine from './icon-funds-line.vue';

const IconFundsLine = Object.assign(_IconFundsLine, {
  install: (app: App) => {
    app.component(_IconFundsLine.name, _IconFundsLine);
  }
});

export default IconFundsLine;