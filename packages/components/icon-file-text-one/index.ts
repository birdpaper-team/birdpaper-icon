import type { App } from 'vue';
import _IconFileTextOne from './icon-file-text-one.vue';

const IconFileTextOne = Object.assign(_IconFileTextOne, {
  install: (app: App) => {
    app.component(_IconFileTextOne.name, _IconFileTextOne);
  }
});

export default IconFileTextOne;