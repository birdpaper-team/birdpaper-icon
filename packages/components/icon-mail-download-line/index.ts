import type { App } from 'vue';
import _IconMailDownloadLine from './icon-mail-download-line.vue';

const IconMailDownloadLine = Object.assign(_IconMailDownloadLine, {
  install: (app: App) => {
    app.component(_IconMailDownloadLine.name, _IconMailDownloadLine);
  }
});

export default IconMailDownloadLine;