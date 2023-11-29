import type { App } from 'vue';
import _IconPrinterFill from './icon-printer-fill.vue';

const IconPrinterFill = Object.assign(_IconPrinterFill, {
  install: (app: App) => {
    app.component(_IconPrinterFill.name, _IconPrinterFill);
  }
});

export default IconPrinterFill;