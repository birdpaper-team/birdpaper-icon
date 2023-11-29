import type { App } from 'vue';
import _IconPaypal from './icon-paypal.vue';

const IconPaypal = Object.assign(_IconPaypal, {
  install: (app: App) => {
    app.component(_IconPaypal.name, _IconPaypal);
  }
});

export default IconPaypal;