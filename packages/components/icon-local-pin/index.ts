import type { App } from 'vue';
import _IconLocalPin from './icon-local-pin.vue';

const IconLocalPin = Object.assign(_IconLocalPin, {
  install: (app: App) => {
    app.component(_IconLocalPin.name, _IconLocalPin);
  }
});

export default IconLocalPin;