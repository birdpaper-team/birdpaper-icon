import type { App } from 'vue';
import _IconFilePdf2Line from './icon-file-pdf-2-line.vue';

const IconFilePdf2Line = Object.assign(_IconFilePdf2Line, {
  install: (app: App) => {
    app.component(_IconFilePdf2Line.name, _IconFilePdf2Line);
  }
});

export default IconFilePdf2Line;