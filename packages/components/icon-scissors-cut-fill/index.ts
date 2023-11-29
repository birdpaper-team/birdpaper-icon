import type { App } from 'vue';
import _IconScissorsCutFill from './icon-scissors-cut-fill.vue';

const IconScissorsCutFill = Object.assign(_IconScissorsCutFill, {
  install: (app: App) => {
    app.component(_IconScissorsCutFill.name, _IconScissorsCutFill);
  }
});

export default IconScissorsCutFill;