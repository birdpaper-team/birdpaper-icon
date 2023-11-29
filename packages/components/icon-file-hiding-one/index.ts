import type { App } from 'vue';
import _IconFileHidingOne from './icon-file-hiding-one.vue';

const IconFileHidingOne = Object.assign(_IconFileHidingOne, {
  install: (app: App) => {
    app.component(_IconFileHidingOne.name, _IconFileHidingOne);
  }
});

export default IconFileHidingOne;