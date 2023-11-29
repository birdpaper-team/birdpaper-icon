import type { App } from 'vue';
import _IconTBoxFill from './icon-t-box-fill.vue';

const IconTBoxFill = Object.assign(_IconTBoxFill, {
  install: (app: App) => {
    app.component(_IconTBoxFill.name, _IconTBoxFill);
  }
});

export default IconTBoxFill;