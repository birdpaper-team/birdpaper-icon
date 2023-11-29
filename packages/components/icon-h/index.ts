import type { App } from 'vue';
import _IconH from './icon-h.vue';

const IconH = Object.assign(_IconH, {
  install: (app: App) => {
    app.component(_IconH.name, _IconH);
  }
});

export default IconH;