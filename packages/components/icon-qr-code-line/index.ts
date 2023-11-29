import type { App } from 'vue';
import _IconQrCodeLine from './icon-qr-code-line.vue';

const IconQrCodeLine = Object.assign(_IconQrCodeLine, {
  install: (app: App) => {
    app.component(_IconQrCodeLine.name, _IconQrCodeLine);
  }
});

export default IconQrCodeLine;