import type { App } from 'vue';
import _IconMailEdit from './icon-mail-edit.vue';

const IconMailEdit = Object.assign(_IconMailEdit, {
  install: (app: App) => {
    app.component(_IconMailEdit.name, _IconMailEdit);
  }
});

export default IconMailEdit;