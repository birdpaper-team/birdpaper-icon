import type { App } from 'vue';
import _IconBodyScanLine from './icon-body-scan-line.vue';

const IconBodyScanLine = Object.assign(_IconBodyScanLine, {
  install: (app: App) => {
    app.component(_IconBodyScanLine.name, _IconBodyScanLine);
  }
});

export default IconBodyScanLine;