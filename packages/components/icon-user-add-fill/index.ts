import type { App } from 'vue';
import _IconUserAddFill from './icon-user-add-fill.vue';

const IconUserAddFill = Object.assign(_IconUserAddFill, {
  install: (app: App) => {
    app.component(_IconUserAddFill.name, _IconUserAddFill);
  }
});

export default IconUserAddFill;