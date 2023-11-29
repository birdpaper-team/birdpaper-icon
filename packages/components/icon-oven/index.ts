import type { App } from 'vue';
import _IconOven from './icon-oven.vue';

const IconOven = Object.assign(_IconOven, {
  install: (app: App) => {
    app.component(_IconOven.name, _IconOven);
  }
});

export default IconOven;