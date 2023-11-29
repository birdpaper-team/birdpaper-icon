import type { App } from 'vue';
import _IconBluetoothConnectFill from './icon-bluetooth-connect-fill.vue';

const IconBluetoothConnectFill = Object.assign(_IconBluetoothConnectFill, {
  install: (app: App) => {
    app.component(_IconBluetoothConnectFill.name, _IconBluetoothConnectFill);
  }
});

export default IconBluetoothConnectFill;