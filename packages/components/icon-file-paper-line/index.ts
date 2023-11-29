import type { App } from 'vue';
import _IconFilePaperLine from './icon-file-paper-line.vue';

const IconFilePaperLine = Object.assign(_IconFilePaperLine, {
  install: (app: App) => {
    app.component(_IconFilePaperLine.name, _IconFilePaperLine);
  }
});

export default IconFilePaperLine;