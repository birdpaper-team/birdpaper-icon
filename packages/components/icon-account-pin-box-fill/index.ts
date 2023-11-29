import type { App } from 'vue';
import _IconAccountPinBoxFill from './icon-account-pin-box-fill.vue';

const IconAccountPinBoxFill = Object.assign(_IconAccountPinBoxFill, {
  install: (app: App) => {
    app.component(_IconAccountPinBoxFill.name, _IconAccountPinBoxFill);
  }
});

export default IconAccountPinBoxFill;