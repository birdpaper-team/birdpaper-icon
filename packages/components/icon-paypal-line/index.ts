import type { App } from 'vue';
import _IconPaypalLine from './icon-paypal-line.vue';

const IconPaypalLine = Object.assign(_IconPaypalLine, {
  install: (app: App) => {
    app.component(_IconPaypalLine.name, _IconPaypalLine);
  }
});

export default IconPaypalLine;