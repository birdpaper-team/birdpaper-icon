import type { App } from 'vue';
import _IconTurnOffBluetooth from './icon-turn-off-bluetooth.vue';

const IconTurnOffBluetooth = Object.assign(_IconTurnOffBluetooth, {
  install: (app: App) => {
    app.component(_IconTurnOffBluetooth.name, _IconTurnOffBluetooth);
  }
});

export default IconTurnOffBluetooth;