import type { App } from 'vue';
import _IconScan from './icon-scan.vue';

const IconScan = Object.assign(_IconScan, {
  install: (app: App) => {
    app.component(_IconScan.name, _IconScan);
  }
});

export default IconScan;