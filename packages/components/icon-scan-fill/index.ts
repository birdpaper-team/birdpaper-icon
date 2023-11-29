import type { App } from 'vue';
import _IconScanFill from './icon-scan-fill.vue';

const IconScanFill = Object.assign(_IconScanFill, {
  install: (app: App) => {
    app.component(_IconScanFill.name, _IconScanFill);
  }
});

export default IconScanFill;