import type { App } from 'vue';
import _IconPin from './icon-pin.vue';

const IconPin = Object.assign(_IconPin, {
  install: (app: App) => {
    app.component(_IconPin.name, _IconPin);
  }
});

export default IconPin;