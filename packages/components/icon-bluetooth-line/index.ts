import type { App } from 'vue';
import _IconBluetoothLine from './icon-bluetooth-line.vue';

const IconBluetoothLine = Object.assign(_IconBluetoothLine, {
  install: (app: App) => {
    app.component(_IconBluetoothLine.name, _IconBluetoothLine);
  }
});

export default IconBluetoothLine;