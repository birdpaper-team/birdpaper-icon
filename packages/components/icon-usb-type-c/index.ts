import type { App } from 'vue';
import _IconUsbTypeC from './icon-usb-type-c.vue';

const IconUsbTypeC = Object.assign(_IconUsbTypeC, {
  install: (app: App) => {
    app.component(_IconUsbTypeC.name, _IconUsbTypeC);
  }
});

export default IconUsbTypeC;