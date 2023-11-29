import type { App } from 'vue';
import _IconOilFill from './icon-oil-fill.vue';

const IconOilFill = Object.assign(_IconOilFill, {
  install: (app: App) => {
    app.component(_IconOilFill.name, _IconOilFill);
  }
});

export default IconOilFill;