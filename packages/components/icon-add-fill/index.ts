import type { App } from 'vue';
import _IconAddFill from './icon-add-fill.vue';

const IconAddFill = Object.assign(_IconAddFill, {
  install: (app: App) => {
    app.component(_IconAddFill.name, _IconAddFill);
  }
});

export default IconAddFill;