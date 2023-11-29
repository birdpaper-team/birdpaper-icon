import type { App } from 'vue';
import _IconUsbFill from './icon-usb-fill.vue';

const IconUsbFill = Object.assign(_IconUsbFill, {
  install: (app: App) => {
    app.component(_IconUsbFill.name, _IconUsbFill);
  }
});

export default IconUsbFill;