import type { App } from 'vue';
import _IconEdit from './icon-edit.vue';

const IconEdit = Object.assign(_IconEdit, {
  install: (app: App) => {
    app.component(_IconEdit.name, _IconEdit);
  }
});

export default IconEdit;