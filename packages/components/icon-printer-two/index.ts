import type { App } from 'vue';
import _IconPrinterTwo from './icon-printer-two.vue';

const IconPrinterTwo = Object.assign(_IconPrinterTwo, {
  install: (app: App) => {
    app.component(_IconPrinterTwo.name, _IconPrinterTwo);
  }
});

export default IconPrinterTwo;