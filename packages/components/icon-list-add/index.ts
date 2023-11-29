import type { App } from 'vue';
import _IconListAdd from './icon-list-add.vue';

const IconListAdd = Object.assign(_IconListAdd, {
  install: (app: App) => {
    app.component(_IconListAdd.name, _IconListAdd);
  }
});

export default IconListAdd;