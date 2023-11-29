import type { App } from 'vue';
import _IconDocAdd from './icon-doc-add.vue';

const IconDocAdd = Object.assign(_IconDocAdd, {
  install: (app: App) => {
    app.component(_IconDocAdd.name, _IconDocAdd);
  }
});

export default IconDocAdd;