import type { App } from 'vue';
import _IconRefund2Line from './icon-refund-2-line.vue';

const IconRefund2Line = Object.assign(_IconRefund2Line, {
  install: (app: App) => {
    app.component(_IconRefund2Line.name, _IconRefund2Line);
  }
});

export default IconRefund2Line;