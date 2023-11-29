import type { App } from 'vue';
import _IconPrinterCloudLine from './icon-printer-cloud-line.vue';

const IconPrinterCloudLine = Object.assign(_IconPrinterCloudLine, {
  install: (app: App) => {
    app.component(_IconPrinterCloudLine.name, _IconPrinterCloudLine);
  }
});

export default IconPrinterCloudLine;