import type { App } from 'vue';
import _IconFileFocusOne from './icon-file-focus-one.vue';

const IconFileFocusOne = Object.assign(_IconFileFocusOne, {
  install: (app: App) => {
    app.component(_IconFileFocusOne.name, _IconFileFocusOne);
  }
});

export default IconFileFocusOne;