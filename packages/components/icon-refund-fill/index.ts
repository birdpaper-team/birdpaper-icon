import type { App } from 'vue';
import _IconRefundFill from './icon-refund-fill.vue';

const IconRefundFill = Object.assign(_IconRefundFill, {
  install: (app: App) => {
    app.component(_IconRefundFill.name, _IconRefundFill);
  }
});

export default IconRefundFill;