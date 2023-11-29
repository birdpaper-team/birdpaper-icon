import type { App } from 'vue';
import _IconPaypalFill from './icon-paypal-fill.vue';

const IconPaypalFill = Object.assign(_IconPaypalFill, {
  install: (app: App) => {
    app.component(_IconPaypalFill.name, _IconPaypalFill);
  }
});

export default IconPaypalFill;