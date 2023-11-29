import type { App } from 'vue';
import _IconScanCode from './icon-scan-code.vue';

const IconScanCode = Object.assign(_IconScanCode, {
  install: (app: App) => {
    app.component(_IconScanCode.name, _IconScanCode);
  }
});

export default IconScanCode;