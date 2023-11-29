import type { App } from 'vue';
import _IconFileCodeOne from './icon-file-code-one.vue';

const IconFileCodeOne = Object.assign(_IconFileCodeOne, {
  install: (app: App) => {
    app.component(_IconFileCodeOne.name, _IconFileCodeOne);
  }
});

export default IconFileCodeOne;