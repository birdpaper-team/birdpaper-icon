import type { App } from 'vue';
import _IconFileDownloadLine from './icon-file-download-line.vue';

const IconFileDownloadLine = Object.assign(_IconFileDownloadLine, {
  install: (app: App) => {
    app.component(_IconFileDownloadLine.name, _IconFileDownloadLine);
  }
});

export default IconFileDownloadLine;