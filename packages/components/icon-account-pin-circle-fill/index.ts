import type { App } from 'vue';
import _IconAccountPinCircleFill from './icon-account-pin-circle-fill.vue';

const IconAccountPinCircleFill = Object.assign(_IconAccountPinCircleFill, {
  install: (app: App) => {
    app.component(_IconAccountPinCircleFill.name, _IconAccountPinCircleFill);
  }
});

export default IconAccountPinCircleFill;