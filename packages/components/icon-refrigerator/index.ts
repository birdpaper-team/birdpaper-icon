import type { App } from 'vue';
import _IconRefrigerator from './icon-refrigerator.vue';

const IconRefrigerator = Object.assign(_IconRefrigerator, {
  install: (app: App) => {
    app.component(_IconRefrigerator.name, _IconRefrigerator);
  }
});

export default IconRefrigerator;