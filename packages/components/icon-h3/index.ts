import type { App } from 'vue';
import _IconH3 from './icon-h3.vue';

const IconH3 = Object.assign(_IconH3, {
  install: (app: App) => {
    app.component(_IconH3.name, _IconH3);
  }
});

export default IconH3;