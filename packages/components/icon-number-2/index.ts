import type { App } from 'vue';
import _IconNumber2 from './icon-number-2.vue';

const IconNumber2 = Object.assign(_IconNumber2, {
  install: (app: App) => {
    app.component(_IconNumber2.name, _IconNumber2);
  }
});

export default IconNumber2;