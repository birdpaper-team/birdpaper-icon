import type { App } from 'vue';
import _IconRefundLine from './icon-refund-line.vue';

const IconRefundLine = Object.assign(_IconRefundLine, {
  install: (app: App) => {
    app.component(_IconRefundLine.name, _IconRefundLine);
  }
});

export default IconRefundLine;