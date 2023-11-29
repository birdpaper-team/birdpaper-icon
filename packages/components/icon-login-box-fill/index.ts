import type { App } from 'vue';
import _IconLoginBoxFill from './icon-login-box-fill.vue';

const IconLoginBoxFill = Object.assign(_IconLoginBoxFill, {
  install: (app: App) => {
    app.component(_IconLoginBoxFill.name, _IconLoginBoxFill);
  }
});

export default IconLoginBoxFill;