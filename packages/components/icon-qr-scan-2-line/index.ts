import type { App } from 'vue';
import _IconQrScan2Line from './icon-qr-scan-2-line.vue';

const IconQrScan2Line = Object.assign(_IconQrScan2Line, {
  install: (app: App) => {
    app.component(_IconQrScan2Line.name, _IconQrScan2Line);
  }
});

export default IconQrScan2Line;