import type { App } from 'vue';
import _IconQrCodeFill from './icon-qr-code-fill.vue';

const IconQrCodeFill = Object.assign(_IconQrCodeFill, {
  install: (app: App) => {
    app.component(_IconQrCodeFill.name, _IconQrCodeFill);
  }
});

export default IconQrCodeFill;