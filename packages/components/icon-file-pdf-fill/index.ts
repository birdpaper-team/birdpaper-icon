import type { App } from 'vue';
import _IconFilePdfFill from './icon-file-pdf-fill.vue';

const IconFilePdfFill = Object.assign(_IconFilePdfFill, {
  install: (app: App) => {
    app.component(_IconFilePdfFill.name, _IconFilePdfFill);
  }
});

export default IconFilePdfFill;