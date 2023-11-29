import type { App } from 'vue';
import _IconQrScanFill from './icon-qr-scan-fill.vue';

const IconQrScanFill = Object.assign(_IconQrScanFill, {
  install: (app: App) => {
    app.component(_IconQrScanFill.name, _IconQrScanFill);
  }
});

export default IconQrScanFill;