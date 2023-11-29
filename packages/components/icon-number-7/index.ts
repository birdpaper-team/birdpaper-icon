import type { App } from 'vue';
import _IconNumber7 from './icon-number-7.vue';

const IconNumber7 = Object.assign(_IconNumber7, {
  install: (app: App) => {
    app.component(_IconNumber7.name, _IconNumber7);
  }
});

export default IconNumber7;