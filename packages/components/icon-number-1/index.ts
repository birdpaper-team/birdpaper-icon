import type { App } from 'vue';
import _IconNumber1 from './icon-number-1.vue';

const IconNumber1 = Object.assign(_IconNumber1, {
  install: (app: App) => {
    app.component(_IconNumber1.name, _IconNumber1);
  }
});

export default IconNumber1;