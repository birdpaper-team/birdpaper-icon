import type { App } from 'vue';
import _IconLedDiode from './icon-led-diode.vue';

const IconLedDiode = Object.assign(_IconLedDiode, {
  install: (app: App) => {
    app.component(_IconLedDiode.name, _IconLedDiode);
  }
});

export default IconLedDiode;