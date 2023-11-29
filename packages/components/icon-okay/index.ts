import type { App } from 'vue';
import _IconOkay from './icon-okay.vue';

const IconOkay = Object.assign(_IconOkay, {
  install: (app: App) => {
    app.component(_IconOkay.name, _IconOkay);
  }
});

export default IconOkay;