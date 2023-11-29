import type { App } from 'vue';
import _IconPrinterCloudFill from './icon-printer-cloud-fill.vue';

const IconPrinterCloudFill = Object.assign(_IconPrinterCloudFill, {
  install: (app: App) => {
    app.component(_IconPrinterCloudFill.name, _IconPrinterCloudFill);
  }
});

export default IconPrinterCloudFill;