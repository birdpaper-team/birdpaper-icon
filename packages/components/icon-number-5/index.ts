import type { App } from 'vue';
import _IconNumber5 from './icon-number-5.vue';

const IconNumber5 = Object.assign(_IconNumber5, {
  install: (app: App) => {
    app.component(_IconNumber5.name, _IconNumber5);
  }
});

export default IconNumber5;