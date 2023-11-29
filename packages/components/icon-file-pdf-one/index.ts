import type { App } from 'vue';
import _IconFilePdfOne from './icon-file-pdf-one.vue';

const IconFilePdfOne = Object.assign(_IconFilePdfOne, {
  install: (app: App) => {
    app.component(_IconFilePdfOne.name, _IconFilePdfOne);
  }
});

export default IconFilePdfOne;