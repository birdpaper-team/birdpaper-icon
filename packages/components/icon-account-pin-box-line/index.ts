import type { App } from 'vue';
import _IconAccountPinBoxLine from './icon-account-pin-box-line.vue';

const IconAccountPinBoxLine = Object.assign(_IconAccountPinBoxLine, {
  install: (app: App) => {
    app.component(_IconAccountPinBoxLine.name, _IconAccountPinBoxLine);
  }
});

export default IconAccountPinBoxLine;