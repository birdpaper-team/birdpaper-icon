import type { App } from 'vue';
import _IconFunds from './icon-funds.vue';

const IconFunds = Object.assign(_IconFunds, {
  install: (app: App) => {
    app.component(_IconFunds.name, _IconFunds);
  }
});

export default IconFunds;