import type { App } from 'vue';
import _IconAdd from './icon-add.vue';

const IconAdd = Object.assign(_IconAdd, {
  install: (app: App) => {
    app.component(_IconAdd.name, _IconAdd);
  }
});

export default IconAdd;