import type { App } from 'vue';
import _IconWindowsFill from './icon-windows-fill.vue';

const IconWindowsFill = Object.assign(_IconWindowsFill, {
  install: (app: App) => {
    app.component(_IconWindowsFill.name, _IconWindowsFill);
  }
});

export default IconWindowsFill;