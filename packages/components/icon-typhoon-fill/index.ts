import type { App } from 'vue';
import _IconTyphoonFill from './icon-typhoon-fill.vue';

const IconTyphoonFill = Object.assign(_IconTyphoonFill, {
  install: (app: App) => {
    app.component(_IconTyphoonFill.name, _IconTyphoonFill);
  }
});

export default IconTyphoonFill;