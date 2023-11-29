import type { App } from 'vue';
import _IconMicrowaveOven from './icon-microwave-oven.vue';

const IconMicrowaveOven = Object.assign(_IconMicrowaveOven, {
  install: (app: App) => {
    app.component(_IconMicrowaveOven.name, _IconMicrowaveOven);
  }
});

export default IconMicrowaveOven;