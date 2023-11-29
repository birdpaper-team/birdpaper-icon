import type { App } from 'vue';
import _IconMenuAddFill from './icon-menu-add-fill.vue';

const IconMenuAddFill = Object.assign(_IconMenuAddFill, {
  install: (app: App) => {
    app.component(_IconMenuAddFill.name, _IconMenuAddFill);
  }
});

export default IconMenuAddFill;