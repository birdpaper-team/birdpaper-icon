import type { App } from 'vue';
import _IconRefund2Fill from './icon-refund-2-fill.vue';

const IconRefund2Fill = Object.assign(_IconRefund2Fill, {
  install: (app: App) => {
    app.component(_IconRefund2Fill.name, _IconRefund2Fill);
  }
});

export default IconRefund2Fill;