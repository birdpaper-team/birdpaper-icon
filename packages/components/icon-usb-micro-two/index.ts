import type { App } from 'vue';
import _IconUsbMicroTwo from './icon-usb-micro-two.vue';

const IconUsbMicroTwo = Object.assign(_IconUsbMicroTwo, {
  install: (app: App) => {
    app.component(_IconUsbMicroTwo.name, _IconUsbMicroTwo);
  }
});

export default IconUsbMicroTwo;