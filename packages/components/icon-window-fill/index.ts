import type { App } from 'vue';
import _IconWindowFill from './icon-window-fill.vue';

const IconWindowFill = Object.assign(_IconWindowFill, {
  install: (app: App) => {
    app.component(_IconWindowFill.name, _IconWindowFill);
  }
});

export default IconWindowFill;