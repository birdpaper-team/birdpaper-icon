import type { App } from 'vue';
import _IconScanLine from './icon-scan-line.vue';

const IconScanLine = Object.assign(_IconScanLine, {
  install: (app: App) => {
    app.component(_IconScanLine.name, _IconScanLine);
  }
});

export default IconScanLine;