import type { App } from 'vue';
import _IconRfidFill from './icon-rfid-fill.vue';

const IconRfidFill = Object.assign(_IconRfidFill, {
  install: (app: App) => {
    app.component(_IconRfidFill.name, _IconRfidFill);
  }
});

export default IconRfidFill;