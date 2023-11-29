import type { App } from 'vue';
import _IconBluetoothConnectLine from './icon-bluetooth-connect-line.vue';

const IconBluetoothConnectLine = Object.assign(_IconBluetoothConnectLine, {
  install: (app: App) => {
    app.component(_IconBluetoothConnectLine.name, _IconBluetoothConnectLine);
  }
});

export default IconBluetoothConnectLine;