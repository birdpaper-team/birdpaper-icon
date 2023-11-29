import type { App } from 'vue';
import _IconUsbMemoryStick from './icon-usb-memory-stick.vue';

const IconUsbMemoryStick = Object.assign(_IconUsbMemoryStick, {
  install: (app: App) => {
    app.component(_IconUsbMemoryStick.name, _IconUsbMemoryStick);
  }
});

export default IconUsbMemoryStick;