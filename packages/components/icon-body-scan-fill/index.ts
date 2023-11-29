import type { App } from 'vue';
import _IconBodyScanFill from './icon-body-scan-fill.vue';

const IconBodyScanFill = Object.assign(_IconBodyScanFill, {
  install: (app: App) => {
    app.component(_IconBodyScanFill.name, _IconBodyScanFill);
  }
});

export default IconBodyScanFill;