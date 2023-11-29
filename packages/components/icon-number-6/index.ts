import type { App } from 'vue';
import _IconNumber6 from './icon-number-6.vue';

const IconNumber6 = Object.assign(_IconNumber6, {
  install: (app: App) => {
    app.component(_IconNumber6.name, _IconNumber6);
  }
});

export default IconNumber6;