import type { App } from 'vue';
import _IconFind from './icon-find.vue';

const IconFind = Object.assign(_IconFind, {
  install: (app: App) => {
    app.component(_IconFind.name, _IconFind);
  }
});

export default IconFind;