import type { App } from 'vue';
import _IconAccountBoxFill from './icon-account-box-fill.vue';

const IconAccountBoxFill = Object.assign(_IconAccountBoxFill, {
  install: (app: App) => {
    app.component(_IconAccountBoxFill.name, _IconAccountBoxFill);
  }
});

export default IconAccountBoxFill;