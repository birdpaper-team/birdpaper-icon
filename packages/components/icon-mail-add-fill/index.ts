import type { App } from 'vue';
import _IconMailAddFill from './icon-mail-add-fill.vue';

const IconMailAddFill = Object.assign(_IconMailAddFill, {
  install: (app: App) => {
    app.component(_IconMailAddFill.name, _IconMailAddFill);
  }
});

export default IconMailAddFill;