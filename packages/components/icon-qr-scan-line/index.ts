import type { App } from 'vue';
import _IconQrScanLine from './icon-qr-scan-line.vue';

const IconQrScanLine = Object.assign(_IconQrScanLine, {
  install: (app: App) => {
    app.component(_IconQrScanLine.name, _IconQrScanLine);
  }
});

export default IconQrScanLine;