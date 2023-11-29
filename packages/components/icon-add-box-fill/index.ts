import type { App } from 'vue';
import _IconAddBoxFill from './icon-add-box-fill.vue';

const IconAddBoxFill = Object.assign(_IconAddBoxFill, {
  install: (app: App) => {
    app.component(_IconAddBoxFill.name, _IconAddBoxFill);
  }
});

export default IconAddBoxFill;