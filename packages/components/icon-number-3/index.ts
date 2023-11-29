import type { App } from 'vue';
import _IconNumber3 from './icon-number-3.vue';

const IconNumber3 = Object.assign(_IconNumber3, {
  install: (app: App) => {
    app.component(_IconNumber3.name, _IconNumber3);
  }
});

export default IconNumber3;