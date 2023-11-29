import type { App } from 'vue';
import _IconDownloadLine from './icon-download-line.vue';

const IconDownloadLine = Object.assign(_IconDownloadLine, {
  install: (app: App) => {
    app.component(_IconDownloadLine.name, _IconDownloadLine);
  }
});

export default IconDownloadLine;