import type { App } from 'vue';
import _IconFilePdf from './icon-file-pdf.vue';

const IconFilePdf = Object.assign(_IconFilePdf, {
  install: (app: App) => {
    app.component(_IconFilePdf.name, _IconFilePdf);
  }
});

export default IconFilePdf;