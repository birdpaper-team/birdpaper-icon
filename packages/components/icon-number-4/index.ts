import type { App } from 'vue';
import _IconNumber4 from './icon-number-4.vue';

const IconNumber4 = Object.assign(_IconNumber4, {
  install: (app: App) => {
    app.component(_IconNumber4.name, _IconNumber4);
  }
});

export default IconNumber4;