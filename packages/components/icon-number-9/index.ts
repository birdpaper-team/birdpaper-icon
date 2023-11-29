import type { App } from 'vue';
import _IconNumber9 from './icon-number-9.vue';

const IconNumber9 = Object.assign(_IconNumber9, {
  install: (app: App) => {
    app.component(_IconNumber9.name, _IconNumber9);
  }
});

export default IconNumber9;