import type { App } from 'vue';
import _IconBarcodeBoxLine from './icon-barcode-box-line.vue';

const IconBarcodeBoxLine = Object.assign(_IconBarcodeBoxLine, {
  install: (app: App) => {
    app.component(_IconBarcodeBoxLine.name, _IconBarcodeBoxLine);
  }
});

export default IconBarcodeBoxLine;