import type { App } from 'vue';
import _IconAccountPinCircleLine from './icon-account-pin-circle-line.vue';

const IconAccountPinCircleLine = Object.assign(_IconAccountPinCircleLine, {
  install: (app: App) => {
    app.component(_IconAccountPinCircleLine.name, _IconAccountPinCircleLine);
  }
});

export default IconAccountPinCircleLine;