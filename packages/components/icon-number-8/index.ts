import type { App } from 'vue';
import _IconNumber8 from './icon-number-8.vue';

const IconNumber8 = Object.assign(_IconNumber8, {
  install: (app: App) => {
    app.component(_IconNumber8.name, _IconNumber8);
  }
});

export default IconNumber8;