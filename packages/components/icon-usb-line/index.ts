import type { App } from 'vue';
import _IconUsbLine from './icon-usb-line.vue';

const IconUsbLine = Object.assign(_IconUsbLine, {
  install: (app: App) => {
    app.component(_IconUsbLine.name, _IconUsbLine);
  }
});

export default IconUsbLine;