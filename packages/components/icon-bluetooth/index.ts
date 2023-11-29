import type { App } from 'vue';
import _IconBluetooth from './icon-bluetooth.vue';

const IconBluetooth = Object.assign(_IconBluetooth, {
  install: (app: App) => {
    app.component(_IconBluetooth.name, _IconBluetooth);
  }
});

export default IconBluetooth;