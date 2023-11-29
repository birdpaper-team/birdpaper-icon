import type { App } from 'vue';
import _IconBarcodeFill from './icon-barcode-fill.vue';

const IconBarcodeFill = Object.assign(_IconBarcodeFill, {
  install: (app: App) => {
    app.component(_IconBarcodeFill.name, _IconBarcodeFill);
  }
});

export default IconBarcodeFill;