import type { App } from 'vue';
import _IconEmpty from './icon-empty.vue';

const IconEmpty = Object.assign(_IconEmpty, {
  install: (app: App) => {
    app.component(_IconEmpty.name, _IconEmpty);
  }
});

export default IconEmpty;