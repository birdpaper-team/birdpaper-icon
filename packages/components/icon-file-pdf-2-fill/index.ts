import type { App } from 'vue';
import _IconFilePdf2Fill from './icon-file-pdf-2-fill.vue';

const IconFilePdf2Fill = Object.assign(_IconFilePdf2Fill, {
  install: (app: App) => {
    app.component(_IconFilePdf2Fill.name, _IconFilePdf2Fill);
  }
});

export default IconFilePdf2Fill;