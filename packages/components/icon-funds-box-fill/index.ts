import type { App } from 'vue';
import _IconFundsBoxFill from './icon-funds-box-fill.vue';

const IconFundsBoxFill = Object.assign(_IconFundsBoxFill, {
  install: (app: App) => {
    app.component(_IconFundsBoxFill.name, _IconFundsBoxFill);
  }
});

export default IconFundsBoxFill;