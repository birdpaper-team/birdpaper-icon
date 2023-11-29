import type { App } from 'vue';
import _IconFundsBoxLine from './icon-funds-box-line.vue';

const IconFundsBoxLine = Object.assign(_IconFundsBoxLine, {
  install: (app: App) => {
    app.component(_IconFundsBoxLine.name, _IconFundsBoxLine);
  }
});

export default IconFundsBoxLine;