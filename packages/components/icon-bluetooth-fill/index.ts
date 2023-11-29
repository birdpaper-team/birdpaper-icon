import type { App } from 'vue';
import _IconBluetoothFill from './icon-bluetooth-fill.vue';

const IconBluetoothFill = Object.assign(_IconBluetoothFill, {
  install: (app: App) => {
    app.component(_IconBluetoothFill.name, _IconBluetoothFill);
  }
});

export default IconBluetoothFill;