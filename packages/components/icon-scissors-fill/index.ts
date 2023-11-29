import type { App } from 'vue';
import _IconScissorsFill from './icon-scissors-fill.vue';

const IconScissorsFill = Object.assign(_IconScissorsFill, {
  install: (app: App) => {
    app.component(_IconScissorsFill.name, _IconScissorsFill);
  }
});

export default IconScissorsFill;