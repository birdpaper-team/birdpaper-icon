import type { App } from 'vue';
import _IconQrScan2Fill from './icon-qr-scan-2-fill.vue';

const IconQrScan2Fill = Object.assign(_IconQrScan2Fill, {
  install: (app: App) => {
    app.component(_IconQrScan2Fill.name, _IconQrScan2Fill);
  }
});

export default IconQrScan2Fill;