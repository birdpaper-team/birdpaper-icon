import type { App } from 'vue';
import _IconUsbOne from './icon-usb-one.vue';

const IconUsbOne = Object.assign(_IconUsbOne, {
  install: (app: App) => {
    app.component(_IconUsbOne.name, _IconUsbOne);
  }
});

export default IconUsbOne;