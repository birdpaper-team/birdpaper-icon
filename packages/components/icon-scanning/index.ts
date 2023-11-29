import type { App } from 'vue';
import _IconScanning from './icon-scanning.vue';

const IconScanning = Object.assign(_IconScanning, {
  install: (app: App) => {
    app.component(_IconScanning.name, _IconScanning);
  }
});

export default IconScanning;