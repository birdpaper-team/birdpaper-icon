import type { App } from 'vue';
import _IconBarcodeBoxFill from './icon-barcode-box-fill.vue';

const IconBarcodeBoxFill = Object.assign(_IconBarcodeBoxFill, {
  install: (app: App) => {
    app.component(_IconBarcodeBoxFill.name, _IconBarcodeBoxFill);
  }
});

export default IconBarcodeBoxFill;