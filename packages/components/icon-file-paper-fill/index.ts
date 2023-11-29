import type { App } from 'vue';
import _IconFilePaperFill from './icon-file-paper-fill.vue';

const IconFilePaperFill = Object.assign(_IconFilePaperFill, {
  install: (app: App) => {
    app.component(_IconFilePaperFill.name, _IconFilePaperFill);
  }
});

export default IconFilePaperFill;