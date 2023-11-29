import type { App } from 'vue';
import _IconBillLine from './icon-bill-line.vue';

const IconBillLine = Object.assign(_IconBillLine, {
  install: (app: App) => {
    app.component(_IconBillLine.name, _IconBillLine);
  }
});

export default IconBillLine;